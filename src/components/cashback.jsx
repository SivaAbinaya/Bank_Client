import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import '../style/cashback.css';

export default function Cashback() {
    const [dep, setDep] = useState(0);
    const [bal, setBal] = useState(0);
    const [product, setProducts] = useState([]);
    const [num, setNum] = useState();

    useEffect(() => {
        async function axiosProd() {
            try {
                const response = await axios.get('https://bank-server-ly4z.onrender.com/data');
                setProducts(response.data);
                if (response.data[num]) {
                    setBal(response.data[num].amount); // Set initial balance
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        axiosProd();
    }, [num]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (bal >= dep) {
            let deposit = Number(dep);
            let updatedBalance = Number(bal) - deposit;
            setBal(updatedBalance);

            try {
                await axios.put(`https://bank-server-ly4z.onrender.com/update/${product[num]._id}`, {
                    amount: updatedBalance
                });
                alert("Updated successfully!");
            } catch (error) {
                console.error("Error updating:", error);
            }
        } else {
            alert("Invalid amount");
        }
    }

    function Changeuser(e) {
        setNum(Number(e));
        setBal(product[e].amount);
    }

    return (
        <div className="cashback-container">
            <h1 className="cashback-title">Cashback</h1>
            <h2 className="cashback-balance">Balance: {bal}</h2>
            <form className="cashback-form" onSubmit={handleSubmit}>
                <select onChange={(e) => Changeuser(e.target.value)} className="cashback-select">
                    <option value={0}>Choose the Account</option>
                    {product.map((item, index) => (
                        <option key={index} value={index}>{item.name}</option>
                    ))}
                </select><br />
                <label htmlFor="cashbackAmount" className="cashback-label">Amount to Withdraw:</label>
                <input
                    type="number"
                    id="cashbackAmount"
                    className="cashback-input"
                    onChange={(e) => setDep(e.target.value)}
                    placeholder='RS: Amount'
                /><br /><br />
                <Button type="submit" className="cashback-button">Submit</Button>
            </form>
        </div>
    );
}