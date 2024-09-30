"use client"
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { Button } from "@/components/ui/button"

export default function Home() {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
          <span>
            <Label className="text-[#686868]  text-sm" htmlFor="password">Password</Label>
            <Input className="bg-[#DBDBDB] w-[416px] h-[62px] rounded-2xl" id="email" type="email" required />
          </span>
          <span>
            <Label className="text-[#686868]  text-sm" htmlFor="password">Password</Label>
            <Input className="bg-[#DBDBDB] w-[416px] h-[62px]  rounded-2xl" id="password" type="password" required />
          </span>

          <div className="flex justify-between items-center">
            <span>
              <Switch {...label}/>
              <span className="text-xs">lembrar-me</span>
            </span>
            <span className="cursor-pointer text-sm font-medium">
              Esqueci a senha
            </span>
          </div>

          <div>
            <Button className="w-[416px] h-[47px] font-semibold text-lg ">Entrar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

