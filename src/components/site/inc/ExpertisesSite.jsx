import React, { Component } from 'react';

class ExpertisesSite extends Component {
    render() {
        return (
            <section>
                <div className="gap100 global-expertises-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h1>What can you do with GLOBAL Invest?</h1>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 text-center global-expertises-item">
                                <i className="ti-exchange-vertical global-expertises-img-icon"></i><br/>
                                <a href="#" className="underline">
                                    <span className="mr-1">Manage your expenses</span>
                                    <i className="ti-arrow-right gloabal-expertises-icon"></i>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 text-center global-expertises-item">
                                <i className="ti-money global-expertises-img-icon"></i><br/>
                                <a href="#" className="underline">
                                    <span className="mr-1">Invest your capital</span>
                                    <i className="ti-arrow-right gloabal-expertises-icon"></i>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 text-center global-expertises-item">
                                <i className="ti-user global-expertises-img-icon"></i><br/>
                                <a href="#" className="underline">
                                    <span className="mr-1">Dream big</span>
                                    <i className="ti-arrow-right gloabal-expertises-icon"></i>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 text-center global-expertises-item">
                                <i className="ti-home global-expertises-img-icon"></i><br/>
                                <a href="#" className="underline">
                                    <span className="mr-1">Realize your projects</span>
                                    <i className="ti-arrow-right gloabal-expertises-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExpertisesSite;
