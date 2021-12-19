import React from 'react'
import { LoginButton } from '../../components/loginButton';
import { useLogin } from '../../hooks/useLogin'

export const LoginPage = () => {

    
    const{handleLogin}=useLogin();
    return (
        <LoginButton handleLogin={handleLogin}/>
    )
}

