"use client";
import HomeBar from "@/components/home-bar";
import Image from "next/image";
import { useState, useEffect } from "react";
import Chatwoot from "@/components/chat";
import { listUsers, createUser, updateUser, deleteUser } from "@/services/usersService";


type User = {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string | null; 
    password?: string | null;
    role?: string;
};


export default function Usuarios() {
    const [isEditing, setIsEditing] = useState(false);
    const [users, setUsers] = useState<User[]>([]); 
    const [selectedUser, setSelectedUser] = useState<User | null>(null); 
    const [isNewUser, setIsNewUser] = useState(false);

   
    const fetchUsers = async () => {
        try {
            const data = await listUsers();
            setUsers(data.active_users);
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
        }
    };

   
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleEditClick = (user: User) => {
        setSelectedUser(user);
        setIsEditing(true);
        setIsNewUser(false);
    };

    const handleAddUserClick = () => {
        setSelectedUser({ first_name: "", last_name: "", email: "", phone: "", password: "" });
        setIsEditing(true);
        setIsNewUser(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
        setSelectedUser(null);
        setIsNewUser(false);
    };

    const handleSaveUser = async () => {
        try {
            if (isNewUser && selectedUser) {
               
                const newUser = {
                    ...selectedUser,
                    phone: selectedUser.phone || "", 
                    password: selectedUser.password || "" 
                };
                await createUser(newUser);
                alert("Usuário criado com sucesso.");
            } else if (selectedUser && selectedUser.id !== undefined) {
                // Atualização de usuário existente
                const updatedUser = {
                    ...selectedUser,
                    id: selectedUser.id,
                    phone: selectedUser.phone || "", 
                    password: selectedUser.password || "" 
                };
                await updateUser(updatedUser);
                alert("Usuário atualizado com sucesso.");
            }
            handleCloseEdit();
            await fetchUsers(); 
        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
            alert("Erro ao salvar usuário.");
        }
    };
    
    

    const handleDeleteUser = async (userId: number) => {
        if (confirm("Tem certeza de que deseja excluir este usuário?")) {
            try {
                await deleteUser(userId);
                alert("Usuário excluído com sucesso.");
                await fetchUsers(); 
            } catch (error) {
                console.error("Erro ao excluir usuário:", error);
                alert("Erro ao excluir usuário.");
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSelectedUser((prevState) => (prevState ? { ...prevState, [name]: value } : null));
    };

    return (
        <div className="bg-[#131313] w-full min-h-screen pl-[306px] overflow-y-auto">
            <HomeBar />
            <div className="flex flex-col items-center justify-start w-full min-h-screen mt-[100px] gap-10">
                <div className="w-[68%] font-bold text-xl">
                    <h1 className="text-white">Usuários</h1>
                </div>
                <div className="w-[68%] grid text-[#fff]">
                    <h5 className="font-bold text-xl text-[#fff] mb-[20px]">Administradores: </h5>
                    <div className="flex gap-5 relative">
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center cursor-pointer"
                                style={{
                                    background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                    border: "none"
                                }}
                                onClick={() => handleEditClick(user)}
                            >
                                <div className="text-base">{user.first_name} {user.last_name}</div>
                                <div className="font-bold text-sm">Cargo: {user.role}</div>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        handleDeleteUser(user.id!);
                                    }}
                                >
                                    Excluir
                                </button>
                            </div>
                        ))}

                        <div
                            className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center text-center gap-3 cursor-pointer"
                            style={{
                                background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                border: "none"
                            }}
                            onClick={handleAddUserClick}
                        >
                            <Image src={"/Vector.png"} alt="" width={67} height={67} />
                            <span>Adicionar <br /> admin</span>
                        </div>
                    </div>

                    {isEditing && selectedUser && (
                        <div className="absolute top-0 left-32% w-[968px] mt-[90px] h-[380px] flex flex-col justify-center items-center z-10 rounded-3xl"
                            style={{
                                background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                border: "none"
                            }}>
                            <div className="text-white w-[100%] pl-[50px] pr-[50px]">
                                <h2 className="font-bold text-xl mb-[40px]">
                                    {isNewUser ? "Adicionar Usuário" : "Edição de Usuário"}
                                </h2>
                                <div className="grid grid-cols-2 justify-between gap-10">
                                    <span>
                                        <label>Nome</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={selectedUser.first_name}
                                            onChange={handleInputChange}
                                            placeholder="Nome"
                                            className="w-[424px] h-[38px] rounded-xl p-[10px]"
                                        />
                                    </span>
                                    <span>
                                        <label>Sobrenome</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={selectedUser.last_name}
                                            onChange={handleInputChange}
                                            placeholder="Sobrenome"
                                            className="w-[424px] h-[38px] rounded-xl p-[10px]"
                                        />
                                    </span>
                                    <span>
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={selectedUser.email}
                                            onChange={handleInputChange}
                                            placeholder="Email"
                                            className="w-[424px] h-[38px] rounded-xl p-[10px]"
                                        />
                                    </span>
                                    <span>
                                        <label>Senha</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={selectedUser.password || ""}
                                            onChange={handleInputChange}
                                            placeholder="Senha"
                                            className="w-[424px] h-[38px] rounded-xl p-[10px]"
                                        />
                                    </span>
                                    <span>
                                        <label>Telefone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={selectedUser.phone || ""}
                                            onChange={handleInputChange}
                                            placeholder="Telefone"
                                            className="w-[424px] h-[38px] rounded-xl p-[10px]"
                                        />
                                    </span>
                                </div>
                                <div className="flex justify-end mr-[-10px] gap-5 mt-6">
                                    <button className="bg-[#88000A] w-[88px] h-[35px] text-white rounded-xl" onClick={handleCloseEdit}>Fechar</button>
                                    <button className="bg-[#A47704] w-[88px] h-[35px] text-white rounded-xl" onClick={handleSaveUser}>Salvar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Chatwoot />
        </div>
    );
}
