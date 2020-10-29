import React, { Component } from 'react'
import HelmetSite from './inc/HelmetSite'
import NavUserSite from './inc/NavUserSite'
import FooterUserSite from "./inc/FooterUserSite";


export class IndexSite extends Component {
    render() {
        return (
            <>
                <HelmetSite title={`Global Multi Investissement`}/>
                <NavUserSite/>
                <FooterUserSite />
            </>
        )
    }
}

export default IndexSite
