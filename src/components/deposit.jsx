import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import '../style/deposit.css';

export default function Deposit() {
    const [dep, setDep] = useState(0);
    const [bal, setBal] = useState(0);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('https://bank-server-ly4z.onrender.com/data');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchUsers();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (selectedUser) {
            const updatedBalance = Number(bal) + Number(dep);
            setBal(updatedBalance);

            try {
                await axios.put(`https://bank-server-ly4z.onrender.com/update/${selectedUser._id}`, {
                    amount: updatedBalance
                });
                alert("Updated successfully!");
            } catch (error) {
                console.error("Error updating balance:", error);
            }
        } else {
            alert("Please select a user.");
        }
    }

    function handleUserChange(e) {
        const userId = e.target.value;
        const user = users.find(user => user._id === userId);
        setSelectedUser(user);
        setBal(user ? user.amount : 0);
    }

    return (
        <div className="deposit-container">
            <h1 className="deposit-title">Deposit</h1>
            <h2 className="deposit-balance">Balance: {bal}</h2>
            <form className="deposit-form" onSubmit={handleSubmit}>
                <select onChange={handleUserChange} className="deposit-select">
                    <option value="">Choose the Account</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                    ))}
                </select><br /> 
                <label htmlFor="depositAmount" className="deposit-label">Amount to Deposit:</label>
                <input
                    type="number"
                    id="depositAmount"
                    className="deposit-input"
                    onChange={(e) => setDep(e.target.value)}
                    placeholder='RS: Amount'
                /><br /><br />
                <Button type="submit" className="deposit-button">Submit</Button>
            </form>
        </div>
    );
}