"use client";
import Image from "next/image";
import Link from "next/link";
import { AJudaData } from "@/data/ajuda.data";
import { useState } from "react"; // Importa o useState

export default function Ajuda() {
    const [abertas, setAbertas] = useState<Array<boolean>>(Array(AJudaData.length).fill(false)); 

    const toggleFaq = (index: number) => {
        setAbertas((prev) => {
            const novasAbertas = [...prev];
            novasAbertas[index] = !novasAbertas[index]; 
            return novasAbertas;
        });
    };

    return (
        <div>
            <Link href={"/cliente"} className="w-[80vw] flex m-auto justify-between items-center mt-[3%]">
                <Image src={"/voltar-preto.png"} alt="voltar" width={20} height={16} />
            </Link>

            <div className="w-[80vw] flex m-auto justify-between items-center">
                <div>
                    <h1 className="text-7xl text-[#131313] font-semibold">FAQs</h1>
                    <p className="text-lg font-medium w-[421px]">Tem dúvidas? Aqui você encontrará as respostas mais importantes do nosso sistema, além de acesso a tutoriais passo a passo e suporte personalizado</p>
                </div>
                <Image src={"/ajuda.png"} alt="imagem ajuda" width={610} height={422} />
            </div>
            <h1 className="text-3xl font-semibold text-center mt-[2%] mb-[2%]">Perguntas frequentes</h1>
            <div className="w-[60vw] m-auto">
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
    );
}
