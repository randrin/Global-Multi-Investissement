import React, { Component } from 'react';
import {Link} from "react-router-dom";
//import PropTypes from 'prop-types';

export class NavUserSite extends Component {
    

    render() {
        return (
             <>
                    <Link to={`/`} className="App-link" >Home</Link>
                    <Link to={`/faq/`} className="App-link" >FAQ</Link>
                    <Link to={`/about/`} className="App-link" >About</Link>
            </>
        )
    }
}

export default NavUserSite
