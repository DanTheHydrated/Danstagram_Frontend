import React, { useState } from "react"
import AuthService from "./services/auth.service";
import { useGlobalState } from "./context/GlobalContext";
import jwtDecode from "jwt-decode";

export default function Login() {
    const [state, dispatch] = useGlobalState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    
        AuthService
            .login(username, password)
            .then(async (resp) => {
                let data = jwtDecode(resp.access)
                await dispatch({
                    currentUserToken: resp.access,
                    currentUser: data
                })
            });
    }
    return(
        <div>
            
        </div>
    )
}

