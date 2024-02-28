import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert('Invalid email or password');
            }
        }
    }

    return (
        <div>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
}
