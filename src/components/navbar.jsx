import { useContext, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Nav_bar(){
    let user = useContext(navdataContext)
    let [nav,setNav]=useState(user)
   
    console.log(nav)
    return(<>
        <Navbar expand="lg" className="bg-body-tertiary" id='nav'>
            <h1>Abi Bank</h1>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#register">Register</Nav.Link>
                  <Nav.Link href="#deposit">Deposit</Nav.Link>
                  <Nav.Link href="#cashback">Cash Back</Nav.Link>
                  <Nav.Link href="#alldata">All Data</Nav.Link>

                  {/* {user.AllData}
                  {user.Deposit}
                  {user.CashBack} */}
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}