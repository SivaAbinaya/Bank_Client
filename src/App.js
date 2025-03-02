import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Cashback from './components/cashback';
import Alldata from './components/alldata';
import Deposit from './components/deposit';
import Home from './components/home'; 
import { UserProvider } from './components/context';
import data from './components/data.json';

function App() {
  return (
    <div className="app-container">
     <Navbar id="header" bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home" className="corner-brand">Abi Bank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#deposit">Deposit</Nav.Link>
            <Nav.Link href="#cashback">Cashback</Nav.Link>
            <Nav.Link href="#alldata">Alldata</Nav.Link>
          </Nav>
    
        </Container>
      </Navbar>
      
      <HashRouter>
        <UserProvider value={{ users: data }}>
          <Routes>
           
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/cashback' element={<Cashback />} />
            <Route path='/alldata' element={<Alldata />} />
          </Routes>
        </UserProvider>
      </HashRouter>
    </div>
  );
}

export default App;