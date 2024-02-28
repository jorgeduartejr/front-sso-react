import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { set } from "firebase/database";


export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const signin = async (email: string, password: string) => {
        try{
            const response = await api.signin(email, password);
            const { user, token}    = response.data;
            setUser(user);
            localStorage.setItem('token', token);
            return true;
        }catch(error){
            console.error(error);
            return false;
        }


    
    };

    const signout = async () => {
        try{
            await api.logout();
            setUser(null);
            localStorage.removeItem('token');
        } catch(error){
            console.error('Erro ao fazer logout',error);
        }
    }

    return (
        <AuthContext.Provider value={{user, signin,signout}}>
            {children}
        </AuthContext.Provider>
    )
}