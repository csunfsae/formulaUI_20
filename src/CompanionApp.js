import React, {Component} from 'react';
import GeoLocation from './components/GeoLocation';
import Navs from './components/Navs';

class CompanionApp extends Component {
    render() {
        return (
            <React.Fragment>
                <Navs/> 
                <GeoLocation/>
            </React.Fragment>  
        )
    }
}
export default CompanionApp;