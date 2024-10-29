"use client";
import HomeBar from "@/components/home-bar";
import Image from "next/image";
import { useState } from "react";
import { AJudaData } from "@/data/ajuda.data";
import { useEffect } from "react";
import Chatwoot from "@/components/chat";

export default function Ajuda() {
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        
    },[isEditing])

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
    };


    const [abertas, setAbertas] = useState<Array<boolean>>(Array(AJudaData.length).fill(false));

    const toggleFaq = (index: number) => {
        setAbertas((prev) => {
            const novasAbertas = [...prev];
            novasAbertas[index] = !novasAbertas[index];
            return novasAbertas;
        });
    };

    return (
        <div className="bg-[#131313] w-full min-h-screen pl-[306px] overflow-y-auto">
            <HomeBar />
            <div className="flex flex-col items-center justify-start w-full min-h-screen mt-[100px] gap-10">
                <div className="w-[68%] font-bold text-xl">
                    <h1 className="text-white">VENDAS</h1>
                </div>
                <div className="w-[68%] grid text-[#fff]">
                    <h5 className="font-bold text-xl text-[#fff] mb-[20px]">Contato do suporte</h5>
                    <div className="flex gap-5 relative">
                        <div
                            className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center text-center gap-3 cursor-pointer"
                            style={{
                                background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                border: "none"
                            }}
                            onClick={handleEditClick}
                        >
                            <Image src={"/whatsapp.png"} alt="" width={67} height={67} />
                            <span> Whatsapp </span>
                            <button className="bg-[#F9FBFF]  w-[88px] h-[35px] text-black rounded-xl" onClick={handleCloseEdit}>Contatar</button>
                        </div>
                        <div
                            className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center text-center gap-3 cursor-pointer"
                            style={{
                                background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                border: "none"
                            }}
                            onClick={handleEditClick}
                        >
                            <Image src={"/telefone.png"} alt="" width={67} height={67} />
                            <span> Telefone </span>
                            <button className="bg-[#F9FBFF]  w-[88px] h-[35px] text-black rounded-xl" onClick={handleCloseEdit}>Contatar</button>
                        </div>
                        <div
                            className="rounded-lg w-[168px] h-[233px] flex flex-col justify-center items-center text-center gap-3 cursor-pointer"
                            style={{
                                background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                border: "none"
                            }}
                            onClick={handleEditClick}
                        >
                            <Image src={"/email.png"} alt="" width={67} height={67} />
                            <span> Email </span>
                            <button className="bg-[#F9FBFF]  w-[88px] h-[35px] text-black rounded-xl" onClick={handleCloseEdit}>Contatar</button>
                        </div>
                    </div>

                </div>

                <div className="w-[68%] m-auto">
                    <h5 className="font-bold text-xl text-[#fff] mb-[20px]">FAQ</h5>
                    {AJudaData.map((objeto, index) => (
                        <div
                            key={index}
                            className="rounded-lg"
                            style={{
                                background: 'linear-gradient(to bottom right, #2D2D2D, #050505)',
                                color: 'white',
                                marginBottom: "20px",
                                padding: "20px"
                            }}
                        >
                            <div className="flex justify-between items-center mb-[1%]" onClick={() => toggleFaq(index)}>
                                <h1>{objeto.titulo}</h1>
                                <Image
                                    className="cursor-pointer"
                                    src={abertas[index] ? "/menos.png" : "/mais.png"}
                                    alt={abertas[index] ? "menos" : "mais"}
                                    width={21}
                                    height={21}
                                />
                            </div>
                            <span>
                                <Image src={"/Line 4.png"} alt="linha branca" width={900} height={1} />
                            </span>
                            {abertas[index] && (
                                <p className="mt-[2%]">{objeto.text}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Chatwoot/>
        </div>
    );
}
