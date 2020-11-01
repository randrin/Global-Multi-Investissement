import React, { Component } from 'react';

class BannerAccountCta extends Component {
    render() {
        return (
            <section>
                <div className="gap no-gap bluesh high-opacity btm-mockup global-banner-account-cta-wrapper">
                    <div className="content-bg-wrap" style={{background: 'url(/assets/images/resources/btm-banner.png)'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="btm-baner">
                                    <div className="baner-mockup">
                                        <img src="/assets/images/resources/btm-baner-avatar.png" alt="" />
                                    </div>
                                    <div className="baner-inf">
                                        <span>Want to start now?</span>
                                        <a href="/login" title="">
                                            <span className="mr-1">Open your Account</span>
                                            <i className="ti-arrow-right gloabal-banner-account-cta-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BannerAccountCta;
