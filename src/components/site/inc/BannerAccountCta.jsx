import React, { Component } from 'react';

class BannerAccountCta extends Component {
    render() {
        return (
            <section>
                <div className="gap no-gap bluesh high-opacity btm-mockup">
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
                                        <a href="/login" title="">Open your Account</a>
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
