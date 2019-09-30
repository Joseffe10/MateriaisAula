import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/escola.jpg';

export default function Login({ history }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function hundleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/authenticate', {
                user: login,
                password: password,
            });

            history.push('/main');
        }
        catch (e) {
            alert('Login/Senha inválidos!');
        }
    }
    return (
        <div className="login-container">
            <form onSubmit={hundleSubmit}>
                <img src={logo} alt='MacGyver'></img>
                <br />
                Login <input
                    type="text"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                /><br />
                Senha <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                /><br />
                <button type="submit">Acessar</button>
            </form>
        </div>
    );
}