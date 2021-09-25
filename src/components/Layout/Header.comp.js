import React from 'react'
import '../Layout/header.css'
import {Navbar,Nav,NavbarBrand} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
    return (
        <Navbar className="bg-info navbar-dark" collapseOnSelect expand="md">
            <NavbarBrand className="px-2"><b>CR</b><b style={{color:"#042f5e"}}>M</b></NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="px-2">
                <Nav className="mx-auto">
                    <LinkContainer to="/dashboard"><Nav.Link  className="text-white">Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer to="/ticket-list"><Nav.Link  className="text-white">Tickets</Nav.Link></LinkContainer>
                    <LinkContainer to=""><Nav.Link  className="text-white">Logout</Nav.Link></LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
