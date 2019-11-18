import React, { Component } from 'react'; 
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';

import './GeoLocation.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import io from 'socket.io-client';


const geolocateStyle = {
    position: 'absolute',
    float: 'left',
    margin: '0px',
    padding: '0px'
};

class GeoLocation extends Component {
    constructor(props) {
        super(props);
        // this.carSocket = io('https://car.matadormotorsports.racing'); // connect to socket.io 
        // this.carSocket = io('https://localhost:3000/');

        this.state = { 
            carLat: 34.2418,
            carLong: -118.5289,
            // viewport is keyword ReactMapGl uses point to an object and set values and styles on the map 
            viewport: {    
                width: 500,
                height: 500,
                latitude: 34.2418,
                longitude: -118.5289,
                zoom: 18
                // bearing: 0, // rotation 
                // pitch: 50 // horizon measured in degrees 
            }
        };
        // this.subscribeToLocation(); // use socket to find vehicle position (long , lat) 

    };
    // subscribeToLocation() {
    //     this.carSocket.on('location', (data) => {
    //         this.setState({ carLat: data.lat, carLong: data.long })
    //     });
    // }
    _onViewportChange = viewport => this.setState({ viewport });

    render() {
        return (
            <div className="geolocate"> 
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={viewport => this.setState({ viewport })} // allows interaction with map (moving)
                    mapStyle='mapbox://styles/mapbox/streets-v10' // style map 
                    width='100%'
                    mapboxApiAccessToken='pk.eyJ1IjoiY3N1bmZvcm11bGFzYWUiLCJhIjoiY2syY3d4MGpoMmM4ODNncWhldnUxZXE5OSJ9.EbJxOteIyBQBGTfNp5m5OA' // api key 
                    mapOptions={{
                        logoPosition: 'bottom-right'
                    }}
                >   
                    <Marker
                        latitude={this.state.carLat}
                        longitude={this.state.carLong}
                        className='carMarker'
                    >
                        <span role='img'>️🏎</span>
                    </Marker>
                    
                    
                    <GeolocateControl 
                        style = {geolocateStyle}
                        onViewportChange={viewport => this.setState({viewport})}
                        onViewportChange={this._onViewportChange}
                        positionOptions={{ enableHighAccuracy: true }}
                        fitBoundsOptions={{maxZoom: 20}}
                        trackUserLocation={ true }
                        showUserLocation = { true }
                    />    
                </ReactMapGL>
            </div>
        )
    }
}
export default GeoLocation;  