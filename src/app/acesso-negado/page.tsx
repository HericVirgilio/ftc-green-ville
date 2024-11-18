"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AcessoNegado() {
  const router = useRouter();

  useEffect(() => {
   
    
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const message = params.get("message");
      
      if (message) {
        alert(message);
      }

     
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
  <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-16 h-16 mx-auto mb-4 text-red-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
      />
    </svg>
    <h1 className="text-2xl font-bold mb-4">Acesso Negado</h1>
    <p className="text-gray-300 mb-6">
      Você não tem permissão para acessar esta página. Entre em contato com o administrador se precisar de ajuda.
    </p>
    <button
      onClick={() => window.location.href = '/'}
      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300"
    >
      Voltar para a Página Inicial
    </button>
  </div>
</div>
  );
}
