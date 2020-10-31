import React, { Component } from 'react'
import HelmetSite from '../../inc/HelmetSite'
import NavUserSite from "../../inc/NavUserSite";
import FooterUserSite from "../../inc/FooterUserSite";
import BannerContactCtaSite from "../inc/BannerContactCtaSite";

export class FaqSite extends Component {
    render() {
        return (
            <>
                <HelmetSite title={`Faqs Page | Global Multi Investissement`}/>
                <NavUserSite/>
                <section>
                    <div className="gap2 color-bg">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="top-banner">
                                        <i><img src="/assets/images/faq.png" alt=""/></i>
                                        <h1>Frequently Asked Questions</h1>
                                    </div>
                                    <nav className="breadcrumb">
                                        <a className="breadcrumb-item" href="/">Home</a>
                                        <span className="breadcrumb-item active">FAQ</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="gap gray-bg">
                        <div className="container-fluid">
                            <div className="row" id="page-contents">
                                <div className="col-lg-9 offset-lg-2">
                                    <div className="faq-area">
                                        <h2>FAQ!</h2>
                                        <div className="accordion" id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link" type="button"
                                                                data-toggle="collapse" data-target="#collapseOne"
                                                                aria-expanded="true" aria-controls="collapseOne">
                                                            How to make your own social website ?
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseOne" className="collapse show"
                                                     aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod.
                                                        <ol>
                                                            <li>register yourself on friendzone</li>
                                                            <li>go to the setting panal</li>
                                                            <li>click on create page</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button"
                                                                data-toggle="collapse" data-target="#collapseTwo"
                                                                aria-expanded="false" aria-controls="collapseTwo">
                                                            How to edit my page setting?
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                     data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button"
                                                                data-toggle="collapse" data-target="#collapseThree"
                                                                aria-expanded="false" aria-controls="collapseThree">
                                                            How to change password ?
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse"
                                                     aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingfour">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button"
                                                                data-toggle="collapse" data-target="#collapsefour"
                                                                aria-expanded="false" aria-controls="collapsefour">
                                                            How to search people nearby with location ?
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsefour" className="collapse"
                                                     aria-labelledby="headingfour" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingfive">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button"
                                                                data-toggle="collapse" data-target="#collapsefive"
                                                                aria-expanded="false" aria-controls="collapsefive">
                                                            How to Make your favourit page ?
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsefive" className="collapse"
                                                     aria-labelledby="headingfive" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BannerContactCtaSite />
                <FooterUserSite/>
            </>
        )
    }
}

export default FaqSite
