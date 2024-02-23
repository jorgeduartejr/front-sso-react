import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});


export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validateToken', {token});
        return response.data;
    },
    signin: async (email: string, password: string) => {
        return {
            user: {
                id: 1,
                name: 'John Doe',
                email: 'teste@email.com', // testando a rota de login    
                token: '123456',
            },
        }
        const response = await api.post('/signin', {email, password}); // depois trocar para as rotas da API
        return response.data; 
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
});