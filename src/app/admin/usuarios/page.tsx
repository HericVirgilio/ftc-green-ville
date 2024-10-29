"use client";
import HomeBar from "@/components/home-bar";
import Image from "next/image";
import { useState } from "react";
import Chatwoot from "@/components/chat";

export default function Usuarios() {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
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
                        <div
                            className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center cursor-pointer"
                            style={{
                                background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                border: "none"
                            }}
                            onClick={handleEditClick}
                        >
                            <div className="text-base">Sophia Silva</div>
                            <div className="font-bold text-sm">Cargo: Admin</div>
                        </div>

                        <div
                            className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center text-center gap-3 cursor-pointer"
                            style={{
                                background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                border: "none"
                            }}
                            onClick={handleEditClick}
                        >
                            <Image src={"/Vector.png"} alt="" width={67} height={67} />
                            <span>Adicionar <br /> admin</span>
                        </div>
                    </div>

                    {isEditing && (
                        <div className="absolute top-0 left-32% w-[968px] mt-[90px] h-[380px] flex flex-col justify-center items-center z-10 rounded-3xl"
                            style={{
                                background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                border: "none"
                            }}>
                            <div className="text-white w-[100%]  pl-[50px] pr-[50px]">
                                <h2 className="font-bold text-xl mb-[40px]">Edição de Usuário</h2>
                                <div className="grid grid-cols-2 justify-between gap-10">
                                    <span>
                                        <label>Nome</label>
                                        <input type="text" placeholder="Nome" className="w-[424px] h-[38px] rounded-xl p-[10px]" />
                                    </span>
                                    <span>
                                        <label>Sobrenome</label>
                                        <input type="text" placeholder="Sobrenome" className="w-[424px] h-[38px] rounded-xl p-[10px]" />
                                    </span>
                                    <span>
                                        <label>Email</label>
                                        <input type="text" placeholder="Email" className="w-[424px] h-[38px] rounded-xl p-[10px]" />
                                    </span>
                                    <span>
                                        <label>Senha</label>
                                        <input type="text" placeholder="Senha" className="w-[424px] h-[38px] rounded-xl p-[10px]" />
                                    </span>
                                </div>
                                <div className="flex justify-end mr-[-10px] gap-5 mt-6">
                                    <button className="bg-[#88000A] w-[88px] h-[35px] text-white rounded-xl" onClick={handleCloseEdit}>Fechar</button>
                                    <button className="bg-[#A47704]  w-[88px] h-[35px] text-white rounded-xl" onClick={handleCloseEdit}>Salvar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Chatwoot/>
        </div>
    );
}
