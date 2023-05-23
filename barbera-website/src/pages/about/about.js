import React, { useState } from 'react';
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import Group2 from './group-2.svg';
function About () {

    return (
    <div>
        <Container fluid={true} className="container2">
            <div className="group-2">
                <Row>
                    <Col><img src={Group2} className="grp-2" /></Col>
                    <Col>
                        <div>
                        <p className="text-6">About Us</p>
                        <p className="text-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="component-4">
                            <p className="text-8a">Book An Appointment</p>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

        <Container fluid={true} className="container5">
            <div>
                <Row>
                    <Col><p className="text-14">6+</p></Col>
                    <Col><p className="text-14">15+</p></Col>
                    <Col><p className="text-14">100+</p></Col>
                    <Col><p className="text-14">40+</p></Col>
                </Row>
                <Row className="row-3">
                    <Col><p className="text-15">Years of Experience</p></Col>
                    <Col><p className="text-15">Professionals</p></Col>
                    <Col><p className="text-15">Happy Clients</p></Col>
                    <Col><p className="text-15">Lorem ipsum</p></Col>
                </Row>
            </div>
        </Container>
    </div>
    );
}    
            
export default About;