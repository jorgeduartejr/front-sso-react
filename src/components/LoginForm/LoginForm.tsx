import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

const appkey = process.env.REACT_APP_APP_KEY;
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

 
  } catch (error) {
    console.error('Erro ao obter o token:', error);
  }
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await getToken(appkey, secret); // Chamada para obter o token JWT
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
          <FaUser className='icon' />
        </div>

        <div className="input-box">
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <FaLock className='icon' />
        </div>

        <div className='remember-forgot'>
          <label><input type='checkbox' />Remember me</label>
          <a href='#'>Forgot Password?</a>
        </div>

        {error && <div style={{ color: 'red' }}>{error}</div>}
        
        <button type='submit'>Login</button>

        <div className='register-link'>
          <p>Don't have an account? <a href='#'>Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
