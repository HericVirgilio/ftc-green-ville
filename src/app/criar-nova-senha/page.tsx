"use client"
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Chatwoot from "@/components/chat";

export default function CriarNovaSenha() {

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
            Criar nova senha
          </h2>
          <span className="w-[416px] text-xs text-[#7E7E7E]">
            Escolha uma nova senha para seu login.
          </span>
          <span>
            <Label className="text-[#686868]  text-sm" htmlFor="password">Nova senha</Label>
            <Input className="bg-[#DBDBDB] w-[416px] h-[62px]  rounded-2xl" id="password" type="password" required />
          </span>
          <span>
            <Label className="text-[#686868]  text-sm" htmlFor="password">Confirmar senha</Label>
            <Input className="bg-[#DBDBDB] w-[416px] h-[62px]  rounded-2xl" id="password" type="password" required />
          </span>

          <div className="flex justify-between items-center">
            <span className="font-medium text-[#ED0919] text-sm">Dados incorretos. Tente novamente.</span>
          </div>

          <div>
            <Button className="w-[416px] h-[47px] font-semibold text-lg ">Entrar</Button>
          </div>
        </div>
      </div>
      <Chatwoot/>
    </div>
  );
}

