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
    const [accountnum, setAccountnum] = useState('');
    const [accounttype, setAccounttype] = useState('');
    const [pin, setPin] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, password, amount, accountnum, accounttype);
        const newUser = {
            name: name,
            email: email,
            password: password,
            amount: amount,
            accountnum: accountnum,
            accounttype: accounttype,
            pin: pin
        };

        try {
            await axios.post('https://bank-server-ly4z.onrender.com/Create', newUser);
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
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
               
                <div className="form-group">
                    <label>Account Number:</label>
                    <input type="text" onChange={(e) => setAccountnum(e.target.value)} />
                </div>
               
                <div className="form-group">
                    <label>Account Type:</label>
                    <select onChange={(e) => setAccounttype(e.target.value)}>
                        <option value="">Select Account Type</option>
                        <option value="Savings">Savings</option>
                        <option value="Current">Current</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>ATM Pin:</label>
                    <input type="password" onChange={(e) => setPin(e.target.value)} />
                </div>
                <div className="form-group full-width">
                    <label>Amount:</label>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <Button type="submit" className="btn btn-primary full-width">Submit</Button>
            </form>
            {message && <p className="register-message">{message}</p>}
        </div>
    );
}