import React, { useState } from 'react';
import './landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import Image2 from './image2.svg';
import Group2 from './group-2.svg';
import Card1 from './Card1.svg';
import Card2 from './Card2.svg';
import Card3 from './Card3.svg';
import Phones from './Phones.svg';
import Play from './Play.svg';
import Apple from './Apple.svg';
import PopularServices from '../../components/popularServices/popularServices.js';
function Landing () {

    return (
    <div>
        <Container fluid={true} className="container1">
        <div className="group-1">
            <Row>
            <Col className="textblock">
                <p className="text-2">Welcome To Barbera</p>
                <p className="text-3">We Will Give You An Impeccable Look</p>
                <p className="text-4">You will leave lookin sharp, relaxed and ready to take on the world, with that swagger in your stride.</p>
                <div className="component-2">
                    <p className="text-5">Book An Appointment</p>
                </div>
            </Col>
            <Col><img src={Image2} className="img-1" /></Col>
            </Row>
        </div>
        </Container>
        <Container fluid={true} className="container2">
            <div className="group-2">
                <Row>
                    <Col><img src={Group2} className="grp-2" /></Col>
                    <Col>
                        <p className="text-6">About Us</p>
                        <p className="text-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="component-3">
                            <p className="text-8">Learn More</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        <PopularServices />

        <Container fluid={true} className="container3">
            <div className="group-3">
                <p className="text-9">Our</p><p className="text-10"> Clients</p>
                <p className="text3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Row>
                    <Col><img src={Card1} className="card1" /></Col>
                    <Col><img src={Card2} className="card1" /></Col>
                    <Col><img src={Card3} className="card1" /></Col>
                </Row>
            </div>
        </Container>
        <Container fluid={true} className="container4">
            <div className="group-4">
                <p className="text-9">Install our </p><p className="text-10">App</p>
                <p className="text3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Row>
                <Col xs={8} className="wider">
                    <p className="text-11">Get an App</p>
                    <p className="text-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <p className="text-13">Download App From</p>
                    <Row className="row-1">
                    <Col><img src={Play} className="button1" /></Col>
                    <Col><img src={Apple} className="button1" /></Col>
                    </Row>
                </Col>
                <Col><img src={Phones} className="phones" /></Col>
                </Row>
            </div>
        </Container>
    </div>
    );
}    
            
export default Landing;