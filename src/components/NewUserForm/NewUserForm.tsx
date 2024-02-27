import React from 'react';
import './NewUserForm.css';
import { FaUser,FaLock} from "react-icons/fa";
import { MdDateRange,MdEmail,MdNumbers } from "react-icons/md";


const NewUserForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
        <h1>Criar novo usuário</h1>
        <div className="input-box">
            <input type='text' placeholder='Nome Completo' required/>
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type='date' placeholder='Data de Nascimento' required/>
            <MdDateRange className='icon'/>
        </div>

        <div className="input-box">
            <input type='email' placeholder='Email' required/>
            <MdEmail className='icon'/>
            
        </div>

        <div className="input-box">
            <input type='number' placeholder='Matrícula' required/>
            <MdNumbers className='icon'/>
            
        </div>

        <div className="input-box">
            <input type='number' placeholder='ZBRM' required/>
            <MdNumbers className='icon'/>
            {/* trocar icone */}
        </div>

        <div className="input-box">
            <input type='password' placeholder='Senha' required/>
            <FaLock className='icon' />
        </div>

        <div className="input-box">
            <input type='password' placeholder='Confirme a Senha' required/>
            <FaLock className='icon' />
        </div>

        {/* <div className='remember-forgot'>
            <label><input type='checkbox'/>Remember me</label>
            <a href='#'>Forgot Password?</a>
        </div> */}

        <button type='submit'>Criar Usuário</button>

        {/* <div className='register-link'>
            <p>Don't have an account? <a href='#'>Register</a></p>
        </div> */}

        </form>
    </div>
  )
}

export default NewUserForm