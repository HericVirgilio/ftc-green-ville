import axios from 'axios';
import { API_BASE_URL } from '@/config/config';

const BASE_URL = `${API_BASE_URL}/clients`;

const getToken = () => {
    return localStorage.getItem('access_token');
};

export const getClients = async () => {
    try {
        const token = getToken();
        const response = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter clientes:', error);
        throw error;
    }
};

export const addClient = async (clientData: { name: string; email: string; phone?: string }) => {
    try {
        const token = getToken();
        const response = await axios.post(BASE_URL, clientData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar cliente:', error);
        throw error;
    }
};
