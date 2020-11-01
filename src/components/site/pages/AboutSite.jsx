import React, { Component } from 'react'
import HelmetSite from '../../inc/HelmetSite'
import NavUserSite from '../../inc/NavUserSite'
import FooterUserSite from "../../inc/FooterUserSite";
import ServicesSite from "../inc/ServicesSite";
import NewsLettersSite from "../inc/NewsLettersSite";
import BannerContactCtaSite from "../inc/BannerContactCtaSite";
import ClientsSite from "../inc/ClientsSite";

export class AboutSite extends Component {
    render() {
        return (
            <div>
                <HelmetSite title={`About Page | Global Multi Investissement`}/>
                <NavUserSite/>
                <section>
                    <div className="ext-gap bluesh high-opacity">
                        <div className="content-bg-wrap"
                             style={{background: 'url(/assets/images/resources/animated-bg2.png)'}}></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="top-banner">
                                        <h1>About Global Investissement</h1>
                                        <nav className="breadcrumb">
                                            <a className="breadcrumb-item" href="/">Home</a>
                                            <span className="breadcrumb-item active">About us</span>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Top area animated*/}
                <section>
                    <div className="gap100 no-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about-winku">
                                        <h4>Welcome to Global Investissement</h4>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</span>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure
                                            and praising pain was born and I will give you a complete account of the
                                            system, and expound the actual teachings of the great explorer of the truth,
                                            the master-builder of human happiness. No one rejects, dislikes, or avoids
                                            pleasure itself, because it is pleasure</p>
                                        <div className="fonder">
                                            <h4>william gates <i>founder</i></h4>
                                            <i>Global Invest inc</i>
                                        </div>
                                        <figure className="sign-author">
                                            <img src="/assets/images/welcome-sign.png" alt=""/>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <figure className="about-picture">
                                        <img src="/assets/images/resources/about-comapny.jpg" alt=""/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ServicesSite />
                <NewsLettersSite />
                <ClientsSite />
                <BannerContactCtaSite />
                <FooterUserSite/>
            </div>
        )
    }
}

export default AboutSite;
