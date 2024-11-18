/* eslint-disable */
import axios from "axios";
import Cookies from 'js-cookie';
import { API_BASE_URL } from "@/config/config";

const USERS_URL = `${API_BASE_URL}/users`;
const UNIQUE_USER_URL = `${API_BASE_URL}/getUniqueUser`;


const getAuthToken = () => {
  return Cookies.get('accessToken'); 
};


const getAuthHeaders = () => {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};


export const listUsers = async () => {
  try {
    const response = await axios.get(USERS_URL, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    throw new Error("Erro ao listar usuários.");
  }
};


export const createUser = async (userData: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}) => {
  try {
    const response = await axios.post(USERS_URL, userData, { headers: getAuthHeaders() });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao criar usuário:", error);
    throw new Error(error.response?.data?.message || "Erro ao criar usuário.");
  }
};


export const updateUser = async (userData: {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
}) => {
  try {
    const response = await axios.put(USERS_URL, userData, { headers: getAuthHeaders() });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao atualizar usuário:", error);
    throw new Error(error.response?.data?.message || "Erro ao atualizar usuário.");
  }
};


export const deleteUser = async (userId: number) => {
  try {
    const response = await axios.delete(USERS_URL, {
      headers: getAuthHeaders(),
      data: { user_id: userId },
    });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao deletar usuário:", error);
    throw new Error(error.response?.data?.message || "Erro ao deletar usuário.");
  }
};


export const getUniqueUser = async (userId: number) => {
  try {
    const response = await axios.get(`${UNIQUE_USER_URL}?id=${userId}`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter informações do usuário:", error);
    throw new Error(error.response?.data?.message || "Erro ao obter informações do usuário.");
  }
};
