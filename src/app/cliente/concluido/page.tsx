import Image from "next/image";
import Link from "next/link";
import Chatwoot from "@/components/chat";

export default function Cliente() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen gap-8">

            <Image src={"/logo.png"} alt="Logo principal" width={190} height={114} />

            <div className="text-center w-[720px]">
                <h2 className="text-green-600 font-bold text-xl">Pagamento realizado com sucesso!</h2>
                <p>
                    Faça suas compras de forma rápida e fácil. Escaneie os produtos, escolha seu método de pagamento
                    e finalize sua compra em poucos passos. Aproveite a conveniência de um sistema autônomo, disponível a qualquer hora.
                </p>
            </div>


            <div className="flex justify-around mt-4 w-[720px]">
              
                <Link className="text-[#fff] bg-[#131313] w-[220px] h-[47px] border-[#131313] border-[1px] flex justify-center items-center rounded-lg font-semibold" href={"/"}>
                    <span>Nova Compra</span>
                </Link>
            </div>
            <Chatwoot />
        </div>
    );
}
