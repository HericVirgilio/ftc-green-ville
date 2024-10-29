"use client"
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
                <div className="w-[68%]"
                    style={{
                        color: 'white',
                        marginBottom: "20px",
                        borderRadius: '30px'
                    }}>
                    <HeaderTable titulo="Produtos:"/>
                    <RelatorioVendas/>
                </div>
            </div>
            <Chatwoot/>
        </div>
    )
}
