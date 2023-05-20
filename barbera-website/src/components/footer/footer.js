import React, { useState } from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BarberaWhiteLogo from './barbera-white-logo.svg';
import Playstore from './playstore.svg';
import Applestore from './applestore.svg';

import CookiesPolicy from '../../pages/cookiesPolicy/cookiesPolicy.js';
import TermsConditions from '../../pages/termsConditions/termsConditions.js';
import PrivacyPolicy from '../../pages/privacyPolicy/privacyPolicy.js';


function Footer() {

    return (
        <div className="Footer">
        <Container fluid={true}>
            <Row className="top">
                <Col xs={2} md={2} lg={2}>
                    <Row id="r1"><img src={BarberaWhiteLogo} className="logo1" alt="Barbera-white-logo" /></Row>
                    <Row id="r1">B 35, Some street <br></br> adderess, Mumbai</Row>
                </Col>
                <Col xs={3} md={3} lg={3} className="c2">
                    <Row id="r1">Working days / 08:00 - 20:00</Row>
                    <Row id="r1">Saturday / 08:00 - 20:00</Row>
                    <Row id="r1">Sunday / CLOSED</Row>
                </Col>
                <Col xs={3} md={3} lg={3} className="c2">
                    <nav>
                    <Row id="r1"><a href="/TermsConditions">Terms & Conditions</a></Row>
                    <Row id="r1"><a href="/PrivacyPolicy">Privacy Policy</a></Row>
                    <Row id="r1"><a href="/CookiesPolicy">Cookie Policy</a></Row>
                    </nav>
                </Col>
                <Col xs={4} md={4} lg={4} className="download">
                    <Row className="downloadtext">Download App From</Row>
                    <Row className="row2">
                        <Col id="button1"><img src={Playstore} alt="Playstore" /></Col>
                        <Col id="button1"><img src={Applestore} alt="Applestore" /></Col>
                    </Row>
                </Col>
            </Row>
            <Row className="bottom">
                <Col className="text">© 2023 Barbera. All rights reserved. Developed by Jethi Tech Solutions</Col>
                <Col></Col>
            </Row>
        </Container>
        </div>
    );
}    
            
export default Footer;