import React, { useState } from 'react';
import './NewUserForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdDateRange, MdEmail, MdNumbers } from "react-icons/md";
import axios from 'axios';

const NewUserForm = () => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [zbrm, setZbrm] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://example.com/api/register', {
        fullName,
        birthDate,
        email,
        registrationNumber,
        zbrm,
        password,
        confirmPassword
      });
      console.log('Resposta da API:', response.data);
      // Se necessário, redirecione o usuário para a página desejada após o registro bem-sucedido
    } catch (error) {
      setError('Erro ao criar novo usuário. Verifique os dados inseridos.');
      console.error('Erro ao criar novo usuário:', error);
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Criar novo usuário</h1>
        <div className="input-box">
          <input type='text' placeholder='Nome Completo' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type='date' placeholder='Data de Nascimento' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
          <MdDateRange className='icon' />
        </div>

        <div className="input-box">
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <MdEmail className='icon' />
        </div>

        <div className="input-box">
          <input type='number' placeholder='Matrícula' value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} required />
          <MdNumbers className='icon' />
        </div>

        <div className="input-box">
          <input type='number' placeholder='ZBRM' value={zbrm} onChange={(e) => setZbrm(e.target.value)} required />
          <MdNumbers className='icon' />
        </div>

        <div className="input-box">
          <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <FaLock className='icon' />
        </div>

        <div className="input-box">
          <input type='password' placeholder='Confirme a Senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <FaLock className='icon' />
        </div>

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <button type='submit'>Criar Usuário</button>

      </form>
    </div>
  )
}

export default NewUserForm;
