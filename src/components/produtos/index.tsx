import { ProdutosData } from "@/data/produtos.data";
import Image from "next/image";

export default function Produtos(){
    return(
        <main className="w-[75vw] m-auto">
                {ProdutosData.map((objeto, index) => (
                    <div className="flex justify-between mb-[1%]" key={index}>
                        <div className="flex justify-center items-center gap-10">
                            <Image className="rounded-full" src={objeto.img} alt="produto" width={40} height={40} />
                            <span>{objeto.text}</span>
                        </div>

                        <div className="flex justify-between items-center w-[20%]">
                            <span className="text-xl font-bold">R$ {objeto.valor}</span>
                            <span
                                className="text-xl font-bold rounded-lg w-[48px] h-[48px] flex justify-center items-center"
                                style={{
                                    background: 'linear-gradient(to bottom right, #2D2D2D, #050505)',
                                    color: 'white',
                                }}
                            >
                                {objeto.quantidade}
                            </span>

                            <Image src={objeto.apagarItem} alt="apagar item" width={48} height={48} />
                        </div>
                    </div>
                ))}
            </main>
    )
}