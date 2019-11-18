import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Nav.css'

class Navs extends Component {
    render() {
        return (
            <>
                <div className="Navbar">
                    <Navbar 
                        variant="dark" 
                        expand="lg"    
                    >
                        <Navbar.Brand>
                            {/* <img
                                // src="../car.png"
                                width="30"
                                height="30"
                                alt=" "
                            /> */}
                           {'Matador MotorSports'} 

                        </Navbar.Brand>
                    </Navbar>          
                </div>
            </>
        )
    }
}

export default Navs;