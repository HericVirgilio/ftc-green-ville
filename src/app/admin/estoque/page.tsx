"use client"
import { ProdutosPoucoEstoqueData } from "@/data/produtos-pouco-estoque.data";
import HomeBar from "@/components/home-bar";
import HeaderTable from "@/components/header-table";
import RelatorioVendas from "@/components/relatorio-vendas";
import Chatwoot from "@/components/chat";

export default function Vendas() {
    return (
        <div className="bg-[#131313] w-full min-h-screen pl-[306px] overflow-y-auto">
            <HomeBar />
            <div className="flex flex-col items-center justify-start w-full min-h-screen mt-[100px] gap-10">
                <div className="w-[68%] font-bold text-xl">
                    <h1 className="text-white">DASHBOARD</h1>
                </div>
                <div className="w-[68%] grid">
                    <h5
                        className="font-bold text-xl text-[#fff] mb-[20px]"
                    >Produtos com pouco Estoque: </h5>
                    <div className="flex justify-between relative">
                        {ProdutosPoucoEstoqueData.map((objeto, index) => (
                            <div className="relative" key={index}>
                                <div className="w-[190px] h-[125px] flex items-center justify-center" style={{
                                    backgroundImage: `url(${objeto.img})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    filter: 'brightness(60%)'
                                }}></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-lg text-[#fff]">
                                    {objeto.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[68%]"
                    style={{
                        color: 'white',
                        marginBottom: "20px",
                        borderRadius: '30px'
                    }}>
                    <HeaderTable titulo="Produtos:" />
                    <RelatorioVendas />
                </div>
            </div>
            <Chatwoot/>
        </div>
    )
}
