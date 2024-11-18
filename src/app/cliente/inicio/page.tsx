"use client";

import React, { useState } from "react";
import { getProductDetail } from "@/services/productsService"; // Endpoint para buscar produto por código de barras
import HeaderSearch from "@/components/header-search";
import MetodoPagamento from "@/components/metodo-pagamento"; // Sidebar de pagamento
import Chatwoot from "@/components/chat";

interface Product {
    id: string;
    name: string;
    unit_value: number;
    quantity: number;
}

export default function PDV() {
    const [barcode, setBarcode] = useState(""); // Campo para o código de barras
    const [cart, setCart] = useState<Product[]>([]); // Lista de produtos no carrinho
    const [subtotal, setSubtotal] = useState(0); // Subtotal do carrinho
    const [isPaymentVisible, setIsPaymentVisible] = useState(false); // Controle da sidebar de pagamento

    // Função para buscar produto e adicionar ao carrinho
    const handleAddProduct = async () => {
        try {
            const product = await getProductDetail(barcode); // Busca produto por código de barras
            if (product) {
                // Verifica se o produto já está no carrinho
                const existingProduct = cart.find((item) => item.id === product.id);

                if (existingProduct) {
                    // Incrementa a quantidade
                    const updatedCart = cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                    setCart(updatedCart);
                } else {
                    // Adiciona novo produto ao carrinho
                    setCart([...cart, { ...product, quantity: 1 }]);
                }

                // Atualiza o subtotal
                setSubtotal((prev) => prev + product.unit_value);
            }
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            alert("Produto não encontrado.");
        }
        setBarcode(""); // Limpa o campo de código de barras
    };

    // Função para remover um produto do carrinho
    const handleRemoveProduct = (id: string) => {
        const productToRemove = cart.find((item) => item.id === id);
        if (productToRemove) {
            setSubtotal((prev) => prev - productToRemove.unit_value * productToRemove.quantity);
            setCart(cart.filter((item) => item.id !== id));
        }
    };

    // Função para ajustar a quantidade de um produto
    const handleQuantityChange = (id: string, quantity: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
        );
        setCart(updatedCart);

        // Recalcula o subtotal
        const newSubtotal = updatedCart.reduce(
            (sum, item) => sum + item.unit_value * item.quantity,
            0
        );
        setSubtotal(newSubtotal);
    };

    return (
        <div className="w-[80vw] m-auto mt-[3%] text-lg font-semibold relative">
            <HeaderSearch />

            {/* Campo de Busca */}
            <div className="mb-6">
                <input
                    type="text"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddProduct()}
                    placeholder="Bipe ou digite o código de barras"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Lista de Produtos no Carrinho */}
            <div>
                {cart.length > 0 ? (
                    <div>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded-lg"
                            >
                                <div>
                                    <p className="font-bold">{item.name}</p>
                                    <p>R$ {item.unit_value}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))
                                        }
                                        className="px-2 py-1 bg-gray-300 rounded-lg"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(item.id, item.quantity + 1)
                                        }
                                        className="px-2 py-1 bg-gray-300 rounded-lg"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => handleRemoveProduct(item.id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded-lg"
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">Nenhum produto adicionado ao carrinho.</p>
                )}
            </div>

            {/* Resumo do Carrinho */}
            <hr className="my-4" />
            <div className="flex justify-between items-center">
                <p className="text-xl">Subtotal:</p>
                <p className="text-xl font-bold">R$ {subtotal}</p>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    onClick={() => setIsPaymentVisible(true)} // Mostra a sidebar
                    className="px-6 py-3 bg-black text-white rounded-lg"
                >
                    Finalizar Compra
                </button>
            </div>

            {/* Sidebar de Pagamento */}
            <MetodoPagamento
                isVisible={isPaymentVisible}
                toggleDiv={() => setIsPaymentVisible(!isPaymentVisible)}
                
            />

            <Chatwoot />
        </div>
    );
}
