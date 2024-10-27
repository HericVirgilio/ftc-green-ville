"use client"
import HomeBar from "@/components/home-bar";
import Image from "next/image";
export default function Usuarios() {
    return (
        <div className="bg-[#131313] w-full min-h-screen pl-[306px] overflow-y-auto">
            <HomeBar />
            <div className="flex flex-col items-center justify-start w-full min-h-screen mt-[100px] gap-10">
                <div className="w-[68%] font-bold text-xl">
                    <h1 className="text-white">Usuários</h1>
                </div>
                <div className="w-[68%] grid text-[#fff]">
                    <h5
                        className="font-bold text-xl text-[#fff] mb-[20px]"
                    >Administradores: </h5>
                    <div className="flex gap-5 relative">
                        <div className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center" style={{
                                    background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                    border: "none"
                                }}>
                            <div className="text-base">Sophia Silva</div>
                            <div className="font-bold text-sm">Cargo: Admin</div>
                        </div>

                        <div className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center text-center" style={{
                                    background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                    border: "none"
                                }}>
                            <Image src={"/Vector.png"} alt="" width={67} height={67}/>
                            <span>Adicionar <br></br> admin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
