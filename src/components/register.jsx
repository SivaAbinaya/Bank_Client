import React, { useState, useContext } from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';
import UserContext from './context';
import '../style/register.css';

export default function Register() {
    const { users, setUsers } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, password, amount);
        const newUser = {
            name: name,
            email: email,
            password: password,
            amount: amount
        };

        try {
            await axios.post('http://localhost:5000/Create', newUser);
            setUsers([...users, newUser]);
            setMessage("Registration successful!");
        } catch (error) {
            console.error("Error creating user:", error);
            setMessage("Registration failed!");
        }
    }

    return (
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <label>Email:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <label>Amount:</label>
                <input type="amount" onChange={(e) => setAmount(e.target.value)} /><br />
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </form>
            {message && <p className="register-message">{message}</p>}
        </div>
    );
}