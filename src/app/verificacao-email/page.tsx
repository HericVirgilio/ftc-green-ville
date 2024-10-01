"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function VerificacaEmail() {
    return (
        <div className="flex w-full h-screen">
            <div className="bg-black w-1/2 h-full flex justify-center items-center ">
                <Image src={"/img-tela-login.png"} alt="" width={547} height={456} />
            </div>
            <div className="bg-red w-1/2 h-full flex justify-center items-center">
                <div className="grid gap-5 justify-center w-[full]">
                    <div className="flex justify-center">
                        <Image src={"/logo.png"} alt="Logo" width={190} height={114} />
                    </div>
                    <h2 className="text-xl font-normal">
                        Verifique seu e-mail
                    </h2>
                    <span className="w-[416px] text-xs text-[#7E7E7E]">
                        Um email com mais informações para a recuperação da sua conta foi enviado para o email cadastrado.
                    </span>
                    
                    <div>
                        <Button className="w-[416px] h-[47px] font-semibold text-lg ">Voltar para login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}