import { MetodoPagamentoData } from "@/data/metodo-pagamento.data";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface MetodoPagamentoProps {
    isVisible: boolean;
    toggleDiv: () => void;
}

export default function MetodoPagamento({ isVisible, toggleDiv }: MetodoPagamentoProps) {
    const [numeroCartao, setNumeroCartao] = useState<string>("");

    const formatarNumeroCartao = (numero: string) => {
        const apenasDigitos = numero.replace(/\D/g, '');
        const formatado = apenasDigitos.replace(/(.{4})/g, '$1 ').trim();
        return formatado.slice(0, 20);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        setNumeroCartao(formatarNumeroCartao(valor));
    };

    return(
        <div
                className={`rounded-l-lg fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#131313] w-[25%] h-screen p-4 transition-transform duration-300 ease-in-out 
                    ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                <div className="grid text-[#fff] w-[95%] mt-[5%] m-auto">
                    <Image style={{ cursor: "pointer"}} onClick={toggleDiv} className="mb-[15%]" src={"/voltar.png"} alt="voltar" width={24} height={24} />

                    <div className="grid gap-5 mb-[3%]">
                        <h1 className="text-2xl">Pagamento</h1>
                        <span className="text-[#ABBBC2]">3 métodos de pagamento disponíveis</span>
                    </div>

                    <Image src={"/linha.png"} alt="linha" width={600} height={1} />

                    <div className="mt-[5%] grid gap-6">
                        <h3>Método de pagamentos</h3>
                        <div className="flex justify-around items-center">
                            {MetodoPagamentoData.map((objeto, index) => (
                                <div className=" cursor-pointer grid justify-center items-center w-[101px] h-[64px] rounded-lg p-3" key={index} style={{
                                    background: 'linear-gradient(to bottom right, #2D2D2D, #050505)',
                                }}>
                                    <div className="w-[100%] grid justify-center items-center">
                                        <Image src={objeto.img} alt="credito" width={22} height={16} />
                                    </div>
                                    <span>{objeto.titulo}</span>
                                </div>
                            ))}
                        </div>
                        <div className="grid gap-5">
                            <span>
                                <p className="text-[#fff] mb-[5px]">Nome</p>
                                <Input className="bg-[#fff] text-[#000]" type="name" placeholder="Nome" />
                            </span>
                            <span>
                                <p className="text-[#fff] mb-[5px]">Número do cartão</p>
                                <Input className="bg-[#fff] text-[#000]" type="text" placeholder="Número do cartão" value={numeroCartao}
                                    onChange={handleChange} />
                            </span>
                            <span className="flex justify-between items-center gap-5">
                                <span className="w-[200px]">
                                    <p className="text-[#fff] mb-[5px]">Data que expira</p>
                                    <Input className="bg-[#fff] text-[#000] p-2" type="date" placeholder="Data que expira" />
                                </span>
                                <span>
                                    <p className="text-[#fff] mb-[5px]">cvv</p>
                                    <Input className="bg-[#fff] text-[#000]" type="text" placeholder="cvv" />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <Image className="mt-[10%]" src={"/linha.png"} alt="linha" width={600} height={1} />
                <div className="flex gap-5 justify-center mt-[5%]">
                    <span className=" cursor-pointer bg-[#131313] text-[#fff] border-2 w-[156px] h-[47px] rounded-md flex items-center justify-center">
                        <span>Cancelar</span>
                    </span>
                    <Link href={"/cliente/concluido"} className=" cursor-pointer bg-[#fff] text-[#000] rounded-md w-[156px] h-[47px] flex items-center justify-center">
                        <span>Confirmar</span>
                    </Link>
                </div>
            </div>
    )
}