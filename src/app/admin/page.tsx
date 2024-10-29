"use client"
import HomeBar from "@/components/home-bar";
import HeaderTable from "@/components/header-table";
import LinhaHorizontal from "@/components/linha-horizontal";
import TabelaRelatorioVendas from "@/components/tabela-relatorio-vendas";
import TabelaEstoque from "@/components/tabela-estoque";
import Chatwoot from "@/components/chat";

export default function Admin() {
    return (
        <div className="bg-[#131313] w-full min-h-screen pl-[306px] overflow-y-auto">
            <HomeBar />
            <div className="flex flex-col items-center justify-start w-full min-h-screen mt-[100px] gap-10">

                <div className="w-[68%] font-bold text-xl">
                    <h1 className="text-white">DASHBOARD</h1>
                </div>

                <div className="w-[68%] h-[450px]"
                    style={{
                        background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                        color: 'white',
                        marginBottom: "20px",
                        padding: "20px",
                        borderRadius: '30px'
                    }}>
                    <HeaderTable titulo="Relatório de vendas"/>
                    <LinhaHorizontal />
                    <TabelaRelatorioVendas/>
                </div>

                <div className="w-[68%] h-[600px]"
                    style={{
                        background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                        color: 'white',
                        marginBottom: "20px",
                        padding: "20px",
                        borderRadius: '30px'
                    }}>
                    <HeaderTable  titulo="Estoque"/>
                    <LinhaHorizontal />
                    <TabelaEstoque/>
                </div>
            </div>
            <Chatwoot/>
        </div>
    )
}
