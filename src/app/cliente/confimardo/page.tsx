import Image from "next/image";
import Link from "next/link";

export default function Confirmado() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen gap-8">

            <Image src={"/logo.png"} alt="Logo principal" width={190} height={114} />

            <p className="text-center w-[500px]">
                Sua compra foi registrada com sucesso.
                Agradecemos pela preferência e esperamos vê-lo em breve!
            </p>

            <div className="flex justify-around mt-4 w-[720px]">
                <Link className="text-[#131313] w-[220px] h-[47px] border-[#131313] border-[1px] flex justify-center items-center rounded-lg font-semibold" href={"#"}>
                    <span>Imprimir recibo</span>
                </Link>

                <Link className="text-[#fff] bg-[#131313] w-[220px] h-[47px] border-[#131313] border-[1px] flex justify-center items-center rounded-lg font-semibold" href={"/cliente/inicio"}>
                    <span>Nova compra</span>
                </Link>
            </div>

        </div>
    );
}
