import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Clock from 'react-live-clock';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <Navbar variant="dark"> 
                <div className="navbar-header">
                <Navbar.Brand className="navbar-brand">
                    <h3> Matator Motorsports</h3>
                </Navbar.Brand>
                </div>
            </Navbar>
        )
    }
}

export default Header;