/* eslint-disable */

import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from '@/config/config';

const BASE_URL = `${API_BASE_URL}/login`;

export const login = async (email: string, password: string) => {
  try {

    const response = await axios.post(BASE_URL, {
      username: email,
      password: password,
    });

    const { access, refresh } = response.data;

 
    Cookies.set('accessToken', access, { path: '/', sameSite: 'Strict' });
    Cookies.set('refreshToken', refresh, { path: '/', sameSite: 'Strict' });

    return access;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw new Error("Erro ao autenticar o usuário.");
  }
};

export const fetchUserData = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw new Error("Erro ao buscar dados do usuário.");
  }
};

export const handleLogin = async (
  email: string,
  password: string
) => {
  try {
    const accessToken = await login(email, password);
    const userData = await fetchUserData(accessToken);

    Cookies.set('userData', JSON.stringify(userData), { path: '/', sameSite: 'Strict' });
  

    if (typeof window !== 'undefined') {
      if (userData.admin) {
        window.location.href = '/admin';
      } else {
        window.location.href = '/cliente';
      }
    }
    return userData;
  } catch (error) {
    console.error("Erro durante o processo de login:", error);
    throw error;
  }
};



export const isAuthenticated = () => {
  const accessToken = Cookies.get('accessToken');
  return !!accessToken;
};


export const logout = () => {
  Cookies.remove('accessToken', { path: '/' });
  Cookies.remove('refreshToken', { path: '/' });
  Cookies.remove('userData', { path: '/' });
  window.location.href = '/login';
};
