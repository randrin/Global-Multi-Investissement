import React, { Component } from 'react'
import HelmetSite from './inc/HelmetSite'
import NavUserSite from './inc/NavUserSite'
import FooterUserSite from "./inc/FooterUserSite";
import NewsLettersSite from "./site/inc/NewsLettersSite";
import ClientsSite from "./site/inc/ClientsSite";
import BannerAccountCta from "./site/inc/BannerAccountCta";
import ServicesSite from "./site/inc/ServicesSite";
import BanksSite from "./site/inc/BanksSite";


export class IndexSite extends Component {
    render() {
        return (
            <>
                <HelmetSite title={`Global Multi Investissement`}/>
                <NavUserSite/>
                <ServicesSite />
                <ClientsSite />
                <BannerAccountCta />
                <BanksSite />
                <NewsLettersSite />
                <FooterUserSite />
            </>
        )
    }
}

export default IndexSite
