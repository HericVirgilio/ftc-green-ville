import axios from 'axios';

export const login = async (email: string, password: string) => {
  const response = await axios.post('http://localhost:5000/login', {
    username: email,
    password: password,
  });
  return response.data.access_token; 
};
