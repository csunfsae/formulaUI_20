import React, { Component } from 'react';
import { Card, CardDeck, CardGroup, CardColumns, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import moment from 'moment';
import { usePosition } from 'use-position';

import io from 'socket.io-client';

import './Cards.css';

const key = "9b6e02c485d9161a33a3956639611759";


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            city: null,
            lat: 34.2418,
            long: -118.5289,
            temperature: undefined,
            description: undefined, 
            location: null
        }
    }

    componentDidMount() { 
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&APPID=${key}`)
            .then (res => {
                console.log(res);
                const data = res.data;
                this.setState({
                    data: data,
                    temperature: data.main.temp,
                    description: data.weather[0].description
                });
            })
    };

    convertToFarenheit(kelvin) {
        const roundedFaren = Math.round(kelvin * 9/5 - 459.67);
        return roundedFaren;
    };
    // getPosition = (options) => {
    //     return new Promise(function (resolve, reject) {
    //       navigator.geolocation.getCurrentPosition(resolve, reject, options);
    //     });
    // }
    render() { 
        // console.log(`${this.state.lat}`)
        // console.log(`${this.state.long}`)
        // console.log(`${this.state.temperature}`)
        // console.log(`${this.state.location}`)
        return (
            <React.Fragment>
            {/* // <div className="card-container">  */}
            <Container>
                <Row className="row justify-content-between">
                    <Col className="col-6">
                        <Card className="weather-card" border="dark" style={{ width: '15rem' }}>
                            <Card.Header>Today's Forecast</Card.Header>
                            <Card.Body>
                                    <p className="weather"> 
                                        {this.convertToFarenheit(this.state.temperature)}°F  
                                    </p>
                                    <p className="text-center">{this.state.description} </p> 
                            </Card.Body>
                        </Card>  
                    </Col>
                    <Col className="col-6">
                        <Card className="battery-temperature" border="dark" style={{ width: '15rem' }}>
                            <Card.Header>Battery Health</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p className="current-temperature"> Current Temperature: 30°C </p>
                                    <p className="average-temperature"> Average Temperature: 10°C </p>
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                </Row> 
                <Row className="row justify-content-between bottom-row">
                    <Col className="col-6 bottom-col">
                        <Card className="speed" border="dark" style={{ width: '15rem' }}>
                            <Card.Header>Speed Statistics</Card.Header>
                            <Card.Body>
                                <Card.Title> </Card.Title>
                                <Card.Text>
                                    <p> Top Speed:     50 mph</p>
                                    <p> Average Speed: 25 mph</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>  
                    </Col>
                    <Col className="col-6 bottom-col">
                        <Card className="drive-statistics" border="dark" style={{ width: '15rem' }}>
                            <Card.Header>Drive Statistics</Card.Header>
                            <Card.Body>
                                <Card.Title className="drive-title">2 Drives</Card.Title>
                                <Card.Text>
                                    <p> 50.96km Driven</p>
                                    <p> 90% Efficiency</p>
                                    <p> 2hr 30min Drive Time</p>
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


