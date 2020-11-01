import React, { Component } from 'react';

class BannerHeader extends Component {
    render() {
        return (
            <section>
                <div className="global-banner-header-wrapper">
                    <figure><img src="/assets/images/resources/timeline-4.jpg" alt=""/></figure>
                    <div className="global-banner-header-box">
                        <h1 className="text-capitalize">Free registration</h1>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="global-banner-header-cta">
                            <a href="/login" title="">
                                <span className="mr-1">Open Account</span>
                                <i className="ti-arrow-right gloabal-banner-header-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BannerHeader;
