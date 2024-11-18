/* eslint-disable */
import axios from "axios";
import Cookies from 'js-cookie';
import { API_BASE_URL } from "@/config/config";
import { Product } from "@/types/productTypes"; // Importando o tipo

const PRODUCTS_URL = `${API_BASE_URL}/products`;
const PRODUCT_DETAIL_URL = `${API_BASE_URL}/productDetail`;
const PRODUCT_STOCK_URL = `${API_BASE_URL}/productStock`;

const getAuthToken = () => {
  return Cookies.get('accessToken'); 
};

const getAuthHeaders = () => {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Função para listar produtos
export const listProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(PRODUCTS_URL, { headers: getAuthHeaders() });
    return response.data as Product[];
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
    throw new Error("Erro ao listar produtos.");
  }
};

// Função para criar produto
export const createProduct = async (productData: Omit<Product, 'id'>): Promise<Product> => {
  try {
    const response = await axios.post(PRODUCTS_URL, productData, { headers: getAuthHeaders() });
    return response.data as Product;
  } catch (error: any) {
    console.error("Erro ao criar produto:", error);
    throw new Error(error.response?.data?.message || "Erro ao criar produto.");
  }
};

// Função para atualizar produto
export const updateProduct = async (productData: Partial<Product> & { id: string | null }): Promise<Product> => {
    try {
        const response = await axios.put(PRODUCTS_URL, productData, { headers: getAuthHeaders() });
        return response.data as Product;
    } catch (error: any) {
        console.error("Erro ao atualizar produto:", error);
        throw new Error(error.response?.data?.message || "Erro ao atualizar produto.");
    }
};


// Função para deletar produto
export const deleteProduct = async (productId: string): Promise<void> => {
  try {
    const response = await axios.delete(PRODUCTS_URL, {
      headers: getAuthHeaders(),
      data: { id: productId },
    });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao deletar produto:", error);
    throw new Error(error.response?.data?.message || "Erro ao deletar produto.");
  }
};

// Função para obter detalhes de um produto
export const getProductDetail = async (identifier: string): Promise<Product> => {
  try {
    const response = await axios.get(`${PRODUCT_DETAIL_URL}?identifier=${identifier}`, { headers: getAuthHeaders() });
    return response.data as Product;
  } catch (error: any) {
    console.error("Erro ao obter detalhes do produto:", error);
    throw new Error(error.response?.data?.message || "Erro ao obter detalhes do produto.");
  }
};

// Função para listar produtos com baixo estoque
export const getLowStockProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(PRODUCT_STOCK_URL, { headers: getAuthHeaders() });
    return response.data as Product[];
  } catch (error: any) {
    console.error("Erro ao obter produtos com baixo estoque:", error);
    throw new Error(error.response?.data?.message || "Erro ao obter produtos com baixo estoque.");
  }
};
