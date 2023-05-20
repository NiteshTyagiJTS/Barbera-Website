import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import Instagram from './1Instagram.svg';
import Facebook from './2Facebook.svg';
import Twitter from './3Twitter.svg';
import LinkedIn from './4LinkedIn.svg';


function Header () {
    return (
        <div className="strip">
        {/* <Navbar> */}
            <Container fluid={true}>
                <Row>
                    <Col xs={12} md={4}></Col>
                    <Col xs={12} md={4}><div className="Tex">Opening Hour : Sunday - Friday , 08:00 am - 10:00 pm</div></Col>
                    <Col xs={12} md={4}>
                    <div className="logoContainer">
                    <img id="logo" src={Instagram} />
                    <img id="logo" src={Facebook} />
                    <img id="logo" src={Twitter} />
                    <img id="logo" src={LinkedIn} />
                    </div>
                    </Col>
                </Row>
            </Container>
        {/* </Navbar> */}
        </div>
    );
} 

export default Header;