import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import PopularServices from '../../components/popularServices/popularServices.js';
function Services () {

    return (
    <div>
        <PopularServices />
    </div>
    );
}    
            
export default Services;