import React, { Component } from 'react'
import HelmetSite from './inc/HelmetSite'
import NavUserSite from './inc/NavUserSite'
import FooterUserSite from "./inc/FooterUserSite";
import NewsLettersSite from "./site/inc/NewsLettersSite";
import ClientsSite from "./site/inc/ClientsSite";
import BannerAccountCtaSite from "./site/inc/BannerAccountCtaSite";
import ServicesSite from "./site/inc/ServicesSite";
import BanksSite from "./site/inc/BanksSite";
import BannerHeaderSite from "./site/inc/BannerHeaderSite";


export class IndexSite extends Component {
    render() {
        return (
            <>
                <HelmetSite title={`Global Multi Investissement`}/>
                <NavUserSite/>
                <BannerHeaderSite />
                <ServicesSite />
                <ClientsSite />
                <BannerAccountCtaSite />
                <BanksSite />
                <NewsLettersSite />
                <FooterUserSite />
            </>
        )
    }
}

export default IndexSite
