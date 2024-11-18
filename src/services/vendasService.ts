import axios from 'axios';
import { API_BASE_URL } from '@/config/config';

const BASE_URL = `${API_BASE_URL}/vendas`;

const getToken = () => {
    return localStorage.getItem('access_token');
};

export const getVendas = async () => {
    try {
        const token = getToken();
        const response = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter vendas:', error);
        throw error;
    }
};

export const addVenda = async (vendaData: { client_id: number; product_ids: number[] }) => {
    try {
        const token = getToken();
        const response = await axios.post(BASE_URL, vendaData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar venda:', error);
        throw error;
    }
};
