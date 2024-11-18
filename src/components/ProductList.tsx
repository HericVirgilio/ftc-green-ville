import React from "react";

export type Product = {
    id: string;
    name: string;
    mark: string;
    unit_value: number;
    sale_value: number;
    stock: number;
    expiration_date: string;
    barcode: string;
};

interface ProductListProps {
    products: Product[];
    onDelete: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products,  onDelete }) => {
    return (
        <div className="space-y-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-gray-800 p-4 rounded-md text-white flex justify-between items-center"
                >
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
                    <div className="flex gap-2 ml-4">
                        <button
                            onClick={() => onDelete(product.id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            Deletar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
