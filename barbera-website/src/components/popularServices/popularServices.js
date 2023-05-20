import React, { useState } from 'react';
import './popularServices.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Scissors from './Scissors.svg';

function PopularServices() {

    return (
        <div className="component1">
            <Container>
            <p className="text1">Popular</p><p className="text2"> Services</p>
            <p className="text3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <Row>
                <Col>
                    <div className="card">
                        <img src={Scissors} className="scissors" />
                        <p className="text4">Hair Styling</p>
                        <p className="text5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <img src={Scissors} className="scissors" />
                        <p className="text4">Beard Trim</p>
                        <p className="text5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <img src={Scissors} className="scissors" />
                        <p className="text4">Hair Color</p>
                        <p className="text5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="card">
                        <img src={Scissors} className="scissors" />
                        <p className="text4">Cleaning Facial</p>
                        <p className="text5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <img src={Scissors} className="scissors" />
                        <p className="text4">Body Massage</p>
                        <p className="text5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <img src={Scissors} className="scissors" />
                        <p className="text4">Stylish Shave</p>
                        <p className="text5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    </div>
                </Col>
            </Row>
            </Container>


            <Container>
            <p className="text1">Services</p><p className="text2"> Menu</p>
            
            <p className="text3">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.</p>


            <Row>
                <Col><p className="text6">Hair Styling.................................₹ </p><p className="text7">200</p></Col>
                <Col><p className="text6">Beauty Spa.................................₹ </p><p className="text7">400</p></Col>
            </Row>
            <Row>
                <Col><p className="text8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Col>
                <Col><p className="text8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Col>
            </Row>
            <Row>
                <Col><p className="text6">Hair Washing.................................₹ </p><p className="text7">400</p></Col>
                <Col><p className="text6">Stylish Shaving.................................₹ </p><p className="text7">400</p></Col>
            </Row>
            <Row>
                <Col><p className="text8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Col>
                <Col><p className="text8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Col>
            </Row>
            <Row>
                <Col><p className="text6">Body Massage.................................₹ </p><p className="text7">500</p></Col>
                <Col><p className="text6">Hair Colouring.................................₹ </p><p className="text7">500</p></Col>
            </Row>
            <Row>
                <Col><p className="text8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Col>
                <Col><p className="text8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Col>
            </Row>
            <Row>
                <Col><p className="text6">Thai Massage.................................₹ </p><p className="text7">300</p></Col>
                <Col><p className="text6">Moustache Trim.................................₹ </p><p className="text7">300</p></Col>
            </Row>
            <Row>
                <Col><p className="text8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Col>
                <Col><p className="text8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Col>
            </Row>

            </Container>
        </div>
    );

}    
            
export default PopularServices;