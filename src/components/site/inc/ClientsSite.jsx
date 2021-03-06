import React, { Component } from 'react';

class ClientsSite extends Component {
    render() {
        return (
            <section>
                <div className="gap100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="section-heading">
                                        <h1>Bank Sponsors</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s.</p>
                                    </div>
                                    <ul id="sponsor-logo" className="owl-carousel owl-theme">
                                        <li><img alt="" src="/assets/images/resources/sponsor-gray1.png"/></li>
                                        <li><img alt="" src="/assets/images/resources/sponsor-gray2.png"/></li>
                                        <li><img alt="" src="/assets/images/resources/sponsor-gray3.png"/></li>
                                        <li><img alt="" src="/assets/images/resources/sponsor-gray4.png"/></li>
                                        <li><img alt="" src="/assets/images/resources/sponsor-gray5.png"/></li>
                                        <li><img alt="" src="/assets/images/resources/sponsor-gray6.png"/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ClientsSite;
