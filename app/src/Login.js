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
        <div className="Justify-content-center">
            <form onSubmit={handleLogin}>
                <label> Username:
                    <input 
                    type='text'
                    id='username'
                    name='username'
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </label>
                <label> Password:
                    <input 
                    type='text'
                    id='password'
                    name='password'
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                <input
                type='submit'
                value='Login!'
                />
            </form>
            <div className="SignUp-Question">
                <p> do you need to create an acount?</p>
                <button>SignUp!</button>
            </div>
        </div>
    )
}

