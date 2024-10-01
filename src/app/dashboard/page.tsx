"use client"; 

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);


  useEffect(() => {
    const token = localStorage.getItem("access_token");
    
    if (!token) {
    
      router.push("/");
    } else {

      setUsername("Usuário Exemplo"); 
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {username ? (
        <div className="mt-4">
          <p className="text-lg">Bem-vindo, {username}!</p>
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => {
             
              localStorage.removeItem("access_token");
              router.push("/");
            }}
          >
            Sair
          </button>
        </div>
      ) : (
        <p>Carregando informações...</p>
      )}
    </div>
  );
}
