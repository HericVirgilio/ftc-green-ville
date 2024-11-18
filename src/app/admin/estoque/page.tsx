"use client";

import { useState, useEffect } from "react";
import { listProducts, createProduct, updateProduct, deleteProduct, getLowStockProducts } from "@/services/productsService";
import { Product } from "@/types/productTypes";
import HomeBar from "@/components/home-bar";


export default function Estoque() {
    const [products, setProducts] = useState<Product[]>([]);
    const [lowStockProducts, setLowStockProducts] = useState<Product[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Product>({
        id: "",
        name: "",
        mark: "",
        unit_value: 0,
        sale_value: 0,
        stock: 0,
        expiration_date: "",
        barcode: "",
    });

    // Carregar os produtos ao montar o componente
    useEffect(() => {
        fetchProducts();
        fetchLowStockProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const allProducts = await listProducts();
            setProducts(allProducts);
        } catch (error) {
            console.error("Erro ao listar produtos:", error);
        }
    };

    const fetchLowStockProducts = async () => {
        try {
            const lowStock = await getLowStockProducts();
            setLowStockProducts(lowStock);
        } catch (error) {
            console.error("Erro ao listar produtos com baixo estoque:", error);
        }
    };

    const handleCreateOrUpdateProduct = async () => {
        try {
            if (isEdit) {
                await updateProduct(currentProduct);
                alert("Produto atualizado com sucesso!");
            } else {
                await createProduct(currentProduct);
                alert("Produto criado com sucesso!");
            }
            setShowModal(false);
            fetchProducts();
        } catch (error) {
            console.error(`Erro ao ${isEdit ? "atualizar" : "criar"} produto:`, error);
            alert(`Erro ao ${isEdit ? "atualizar" : "criar"} produto.`);
        }
    };

    const handleDeleteProduct = async (id: string) => {
        try {
            await deleteProduct(id);
            alert("Produto deletado com sucesso!");
            fetchProducts();
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            alert("Erro ao deletar produto.");
        }
    };

    const openCreateModal = () => {
        setIsEdit(false);
        setCurrentProduct({
            id: "",
            name: "",
            mark: "",
            unit_value: 0,
            sale_value: 0,
            stock: 0,
            expiration_date: "",
            barcode: "",
        });
        setShowModal(true);
    };

    const openEditModal = (product: Product) => {
        setIsEdit(true);
        setCurrentProduct(product);
        setShowModal(true);
    };

    return (
        <div className="bg-[#131313] min-h-screen pl-[306px] overflow-y-auto">
            <HomeBar />
            <div className="container mx-auto p-6">
                <h1 className="text-white text-2xl font-bold mb-6">DASHBOARD</h1>

                {/* Produtos com baixo estoque */}
                <section className="mb-10">
                    <h2 className="text-white text-lg font-semibold mb-4">Produtos com pouco Estoque:</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {lowStockProducts.map((product) => (
                            <div key={product.id} className="bg-gray-800 p-4 rounded-md text-white text-center">
                                <h3 className="font-bold">{product.name}</h3>
                                <p className="text-sm">Estoque: {product.stock}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Lista de produtos */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-white text-lg font-semibold">Produtos:</h2>
                        <button
                            onClick={openCreateModal}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg"
                        >
                            Adicionar Produto
                        </button>
                    </div>
                    <div className="space-y-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-gray-800 p-4 rounded-md text-white flex justify-between items-center"
                            >
                                {/* Informações do produto */}
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full">
                                    <div>
                                        <h3 className="font-bold">{product.name}</h3>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Marca:</span> {product.mark}</p>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Valor Unitário:</span> R$ {product.unit_value}</p>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Valor de Venda:</span> R$ {product.sale_value}</p>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Estoque:</span> {product.stock}</p>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Validade:</span> {product.expiration_date}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p><span className="font-semibold">Código de Barras:</span> {product.barcode}</p>
                                    </div>
                                </div>

                                {/* Botões de ação */}
                                <div className="flex gap-2 ml-4">
                                    <button
                                        onClick={() => openEditModal(product)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Deletar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-gray-800 p-6 rounded-lg w-[400px]">
                        <h2 className="text-white text-xl mb-4">
                            {isEdit ? "Editar Produto" : "Adicionar Produto"}
                        </h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleCreateOrUpdateProduct();
                            }}
                        >
                            {/* Nome */}
                            <div className="mb-4">
                                <label className="text-white block mb-1">Nome</label>
                                <input
                                    type="text"
                                    value={currentProduct.name}
                                    onChange={(e) =>
                                        setCurrentProduct({ ...currentProduct, name: e.target.value })
                                    }
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    required
                                />
                            </div>

                            {/* Marca */}
                            <div className="mb-4">
                                <label className="text-white block mb-1">Marca</label>
                                <input
                                    type="text"
                                    value={currentProduct.mark}
                                    onChange={(e) =>
                                        setCurrentProduct({ ...currentProduct, mark: e.target.value })
                                    }
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    required
                                />
                            </div>

                            {/* Valor Unitário */}
                            <div className="mb-4">
                                <label className="text-white block mb-1">Valor Unitário</label>
                                <input
                                    type="number"
                                    value={currentProduct.unit_value}
                                    onChange={(e) =>
                                        setCurrentProduct({ ...currentProduct, unit_value: parseFloat(e.target.value) })
                                    }
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    required
                                />
                            </div>

                            {/* Valor de Venda */}
                            <div className="mb-4">
                                <label className="text-white block mb-1">Valor de Venda</label>
                                <input
                                    type="number"
                                    value={currentProduct.sale_value}
                                    onChange={(e) =>
                                        setCurrentProduct({ ...currentProduct, sale_value: parseFloat(e.target.value) })
                                    }
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    required
                                />
                            </div>

                            {/* Estoque */}
                            <div className="mb-4">
                                <label className="text-white block mb-1">Quantidade em Estoque</label>
                                <input
                                    type="number"
                                    value={currentProduct.stock}
                                    onChange={(e) =>
                                        setCurrentProduct({ ...currentProduct, stock: parseInt(e.target.value) })
                                    }
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    required
                                />
                            </div>

                            {/* Data de Validade */}
                            <div className="mb-4">
                                <label className="text-white block mb-1">Data de Validade</label>
                                <input
                                    type="date"
                                    value={currentProduct.expiration_date}
                                    onChange={(e) =>
                                        setCurrentProduct({ ...currentProduct, expiration_date: e.target.value })
                                    }
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    required
                                />
                            </div>

                            {/* Código de Barras */}
                            <div className="mb-4">
                                <label className="text-white block mb-1">Código de Barras</label>
                                <input
                                    type="text"
                                    value={currentProduct.barcode}
                                    onChange={(e) =>
                                        setCurrentProduct({ ...currentProduct, barcode: e.target.value })
                                    }
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    required
                                />
                            </div>

                            {/* Botões */}
                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="bg-gray-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                                >
                                    {isEdit ? "Salvar" : "Adicionar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
