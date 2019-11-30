import React, { Component } from 'react';

import Moment from 'react-moment';
import "./Date.css"

class Date extends Component {
    render() {
        const toUpperCaseFilter = (d) => {
            return d.toUpperCase();
        };
        return (    
            <Moment className="date" format="dddd, MMMM Do, YYYY  h:mm a"/>
        )
    }
}
export default Date; 