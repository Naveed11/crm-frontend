import React from 'react'
import '../Layout/header.css'
import {Navbar,Nav,NavbarBrand} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
const Header = () => {
    return (
        <Navbar className="bg-info navbar-dark" collapseOnSelect expand="md">
            <NavbarBrand className="px-2"><b>CR</b><b style={{color:"#042f5e"}}>M</b></NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="px-2">
                <Nav className="mx-auto">
                    <Nav.Link href="/dashboard" className="text-white">Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard" className="text-white">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard" className="text-white">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
