import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';

export const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.signin(email, password);
            if(isLogged){
                navigate('/');
            } else {
                alert('Invalid email or password');
            }
                
        }
    }

    return (
        <div>
                <LoginForm />
                {/* <h2>Login - Closed Page </h2>
                <input 
                        type="text"
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                <button onClick={() => {handleLogin}}>Login</button> */}



        </div>
        
    );
    
}