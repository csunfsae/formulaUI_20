import React, { Component } from 'react';
import { Card, CardDeck, CardGroup, CardColumns, Container, Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';

import './Cards.css';

//"col col-md-2"

class Cards extends Component {
    render() { 
        return (
            <React.Fragment>
            {/* // <div className="card-container">  */}
                <Container>
                <Row className="row justify-content-between">
                    <Col className="col-6">
                        <Card className="weather-card" border="danger" style={{ width: '15rem' }}>
                            <Card.Header>Weather</Card.Header>
                            <Card.Body>
                                <Card.Title>Today's Forecast</Card.Title>
                                <Card.Text>
                                    70 degrees
                                </Card.Text>
                            </Card.Body>
                        </Card>  
                    </Col>
                    <Col className="col-6">
                        <Card className="battery" border="danger" style={{ width: '15rem' }}>
                            <Card.Header>Battery</Card.Header>
                            <Card.Body>
                                <Card.Title>Battery Temperature</Card.Title>
                                <Card.Text>
                                    Current Battery Temperature is 30 degrees Fareinheit
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                </Row> 
                <Row className="row justify-content-between bottom-row">
                    <Col className="col-6 bottom-col">
                        <Card className="weather-card" border="danger" style={{ width: '15rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Danger Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>  
                    </Col>
                    <Col className="col-6 bottom-col">
                        <Card className="battery" border="danger" style={{ width: '15rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Danger Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                </Row>       
                </Container>    
            {/* </div> */}
            </React.Fragment>
        )
    }

}

export default Cards; 


