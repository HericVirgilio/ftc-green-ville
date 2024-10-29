"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Switch from '@mui/material/Switch';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Chatwoot from "@/components/chat";
import { login } from "@/services/authService";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      localStorage.setItem("access_token", token);
      router.push("/dashboard");
    } catch {
      setError("Login falhou. Verifique suas credenciais.");
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="bg-black w-1/2 h-full flex justify-center items-center">
        <Image src={"/img-tela-login.png"} alt="" width={547} height={456} />
      </div>
      <div className="bg-red w-1/2 h-full flex justify-center items-center">
        <div className="grid gap-5 justify-center w-full">
          <div className="flex justify-center">
            <Image src={"/logo.png"} alt="Logo" width={190} height={114} />
          </div>

          <span>
            <Label className="text-[#686868] text-sm" htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-[#DBDBDB] w-[416px] h-[62px] rounded-2xl"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </span>

          <span>
            <Label className="text-[#686868] text-sm" htmlFor="password">
              Password
            </Label>
            <Input
              className="bg-[#DBDBDB] w-[416px] h-[62px] rounded-2xl"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </span>

          <div className="flex justify-between items-center">
            <span>
              <Switch />
              <span className="text-xs">lembrar-me</span>
            </span>
            <Link href={"/esqueci-a-senha"} className="cursor-pointer text-sm font-medium">
              Esqueci a senha
            </Link>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div>
            <Button
              className="w-[416px] h-[47px] font-semibold text-lg"
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </div>
        </div>
      </div>
      <Chatwoot/>
    </div>
  );
}
