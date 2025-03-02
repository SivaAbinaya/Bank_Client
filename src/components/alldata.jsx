import React, { useContext, useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import axios from "axios";
import UserContext from './context';
import '../style/alldata.css';

export default function AllData() {
  const { users, setUsers } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", amount: "", accounttype: "", accountnum: "", pin: "" });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('https://bank-server-ly4z.onrender.com/data');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchUsers();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`https://bank-server-ly4z.onrender.com/delete/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  }

  function handleEdit(item) {
    setEditId(item._id);
    setFormData({ name: item.name, email: item.email, password: item.password, amount: item.amount, accounttype: item.accounttype, accountnum: item.accountnum, pin: item.pin });  
  }

  async function handleUpdate() {
    try {
      await axios.put(`https://bank-server-ly4z.onrender.com/update/${editId}`, formData);
      setData(data.map((item) => (item._id === editId ? { ...item, ...formData } : item)));
      setEditId(null);
      alert("Updated successfully!");
    } catch (error) {
      console.error("Error updating:", error);
    }
  }

  return (
    <div className="alldata-container">
      <h1 className="alldata-title">All Data</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
            <th scope="col">Account Type</th>
            <th scope="col">Account Number</th> 
            <th scope="col">ATM Pin</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.amount}</td>
              <td>{item.accounttype}</td>
              <td>{item.accountnum}</td>
          
              <td>{item.pin}</td>
              <td>
                <Button variant="success" onClick={() => handleEdit(item)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editId && (
        <div className="edit-form">
          <h2>Edit Data</h2>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email"
          />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Password"
          />
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            placeholder="Balance"
          />
          <input
            type="text"
            value={formData.accounttype}
            onChange={(e) => setFormData({ ...formData, accounttype: e.target.value })}
            placeholder="Account Type"
          />
          <input
            type="number"
            value={formData.accountnum}
            onChange={(e) => setFormData({ ...formData, accountnum: e.target.value })}
            placeholder="Account Number"
          />  
          <input
            type="password"
            value={formData.pin}
            onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
            placeholder="ATM Pin"
          />
          <Button variant="secondary" onClick={() => setEditId(null)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </div>
      )}
    </div>
  );
}