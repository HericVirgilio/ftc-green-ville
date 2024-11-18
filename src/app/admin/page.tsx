"use client";
import { useEffect, useState } from "react";
import HomeBar from "@/components/home-bar";
import HeaderTable from "@/components/header-table";
import LinhaHorizontal from "@/components/linha-horizontal";
import TabelaRelatorioVendas from "@/components/tabela-relatorio-vendas";
import ProductList from "@/components/ProductList"; // Importar o componente reutilizável
import Chatwoot from "@/components/chat";
import { listProducts, deleteProduct } from "@/services/productsService"; // Importar serviços
import { Product } from "@/types/productTypes"; // Importar o tipo Product


export default function Admin() {
    const [products, setProducts] = useState<Product[]>([]);

    // Função para buscar produtos da API
    const fetchProducts = async () => {
        try {
            const allProducts = await listProducts();
            setProducts(allProducts); 
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            alert("Erro ao carregar produtos.");
        }
    };

    // Função para deletar produto
    const handleDelete = async (id: string) => {
        try {
            await deleteProduct(id); // Deleta o produto pelo ID
            alert("Produto deletado com sucesso!");
            fetchProducts(); // Atualiza a lista após a exclusão
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            alert("Erro ao deletar produto.");
        }
    };


    // Buscar produtos ao montar o componente
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="bg-[#131313] w-full min-h-screen pl-[306px] overflow-y-auto">
            <HomeBar />
            <div className="flex flex-col items-center justify-start w-full min-h-screen mt-[100px] gap-10">
                <div className="w-[68%] font-bold text-xl">
                    <h1 className="text-white">DASHBOARD</h1>
                </div>

                {/* Relatório de Vendas */}
                <div
                    className="w-[68%] h-[450px]"
                    style={{
                        background: "linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)",
                        color: "white",
                        marginBottom: "20px",
                        padding: "20px",
                        borderRadius: "30px",
                    }}
                >
                    <HeaderTable titulo="Relatório de vendas" />
                    <LinhaHorizontal />
                    <TabelaRelatorioVendas />
                </div>

                {/* Produtos em Estoque */}
                <div
                    className="w-[68%]"
                    style={{
                        background: "linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)",
                        color: "white",
                        marginBottom: "20px",
                        padding: "20px",
                        borderRadius: "30px",
                    }}
                >
                    <HeaderTable titulo="Produtos em Estoque" />
                    <LinhaHorizontal />
                    <ProductList products={products}  onDelete={handleDelete} />
                </div>
            </div>
            <Chatwoot />
        </div>
    );
}
