import React from 'react'

import { LoginButton } from '../../components/login-button';
import { useLogin } from '../../hooks/useLogin'

export const LoginPage = () => {
    const{handleLogin}=useLogin();
    return (
        <LoginButton handleLogin={handleLogin}/>
    )
}

