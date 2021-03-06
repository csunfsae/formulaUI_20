import React, {Component} from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import Clock from 'react-live-clock';

import Date from '../components/Date';
import Geolocation from '../components/Geolocation';
import Cards from '../components/Cards';

import './CompanionApp.css';

class CompanionApp extends Component {
    render() {
        return (
            <React.Fragment> 
                <Container fluid>
                    <Row className="top-row">
                        <Col > 
                            <Date /> 
                        </Col>
                    </Row>
                    <Row className="second-row">
                        <Col md={6}> <Geolocation/></Col>
                        <Col md={6}> <Cards /> </Col>
                    </Row>
                </Container>
            </React.Fragment>
            
        )
    }
}
export default CompanionApp;



                            {/* <Clock className="clock"
                                format={"h:mm A"}
                                ticking={true}
                                timezone={"US/Pacific"}
                            /> */}