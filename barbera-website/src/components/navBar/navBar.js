import React, { useState } from 'react';
import './navBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import BarberaWhiteLogo from './barbera-white-logo.svg';

function NavBar() {

    return (
        <div className="Navbar">
            <Container fluid>
                <Row>
                    <Col xs={12} md={2}><img src={BarberaWhiteLogo} className="logo" alt="Barbera-white-logo" /></Col>
                    <Col xs={12} md={4}></Col>
                    <Col xs={12} md={6}>
                    <div className="nav">        
                        <div id="navItem">Home</div>
                        <div id="navItem">About Us</div>
                        <div id="navItem">Services</div>
                        <div id="navItem">Contact</div>
                        <div id="navItem">Get the APP</div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NavBar;