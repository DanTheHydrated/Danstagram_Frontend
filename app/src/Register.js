import React, { useState } from "react"
import AuthService from "./services/auth.service"



export default function SignUp() {
    const [user, setUser] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleChange = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AuthService.register(user)
    }

    return (
        <div className="sumbit-card">
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Username:
                    <input 
                    type='text'
                    id='username'
                    placeholder="Username"
                    onChange={(e) => handleChange('username', e.target.value)}
                    required
                    />
                    </label>
                </div>
                <div>
                    <label> Password:
                        <input 
                        type="text"
                        id='password'
                        minLength="8"
                        placeholder="8 characters at least"
                        onChange={(e) => handleChange('password', e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div>
                    <label> Password Confirmation:
                        <input
                        type="text"
                        id='passwordCon'
                        minLength="8"
                        placeholder="Re-Password"
                        onChange={(e) => handleChange('passwordCon', e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div>
                    <label> First Name:
                        <input
                        type="text"
                        id='firstName'
                        placeholder= "First Name"
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div>
                    <label> Last Name:
                        <input 
                        type="text"
                        id='lastName'
                        placeholder="Last Name"
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div>
                    <label> Email:
                        <input
                        type='text'
                        id='email'
                        placeholder="Email"
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        />
                    </label>
                </div>
                <input 
                type="submit"
                value="Register"
                disabled={(
                    user.password &&
                    user.password.length >= 8 &&
                    user.password === user.passwordCon &&
                    user.firstName &&
                    user.lastName &&
                    user.email
                    ) ? false : true}
                />
            </form>
        </div>
    )
};
