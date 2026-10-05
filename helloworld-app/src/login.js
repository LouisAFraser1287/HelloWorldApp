/* import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleLogin = (e) => {
e.preventDefault();
setErrorMessage('');


if (username === 'admin' && password === 'password') {
    navigate('/dashboard');

} else {
    setErrorMessage('Invalid username or password');
} 
    setErrorMessage('Invalid username or password');

}
};*/
