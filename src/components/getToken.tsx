import React, { useState } from 'react';
import axios from 'axios';

const appKey = process.env.REACT_APP_APP_KEY;
const secret = process.env.REACT_APP_SECRET;

const getToken = async (appkey, secret) => {
  try {
    const response = await axios.post('http://localhost:3333/gettoken', {
      appkey: appkey,
      secret: secret
    });

    const token = response.data.token;
    console.log('Token recebido:', token);

    // Armazena o token no armazenamento local
    localStorage.setItem('token', token);

    // Faça o que for necessário com o token recebido
  } catch (error) {
    console.error('Erro ao obter o token:', error);
    // Trate o erro conforme necessário
  }
};


export default getToken;
