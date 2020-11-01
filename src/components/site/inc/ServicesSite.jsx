import React, { Component } from 'react';

class ServicesSite extends Component {
    render() {
        return (
            <section>
                <div className="gap100 gray-bg">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h1>Our Services</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                        <div className="servic-category">
                            <div className="row merged">
                                <div className="col-lg-4 col-md-6">
                                    <div className="category-box selected">
                                        <i className="fa fa-wordpress"></i>
                                        <h2>Service Name</h2>
                                        <p>Met consectetur adipisicing elit dolore suscipit, inventore aliquid...</p>
                                        <a href="#" className="main-btn" title="">
                                            <span className="mr-1">Read More</span>
                                            <i className="ti-angle-double-right gloabal-services-icon"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="category-box">
                                        <i className="fa fa-html5"></i>
                                        <h2>Service Name</h2>
                                        <p>Met consectetur adipisicing elit dolore suscipit, inventore aliquid...</p>
                                        <a href="#" className="main-btn" title="">
                                            <span className="mr-1">Read More</span>
                                            <i className="ti-angle-double-right gloabal-services-icon"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="category-box">
                                        <i className="fa fa-google-wallet"></i>
                                        <h2>Service Name</h2>
                                        <p>Met consectetur adipisicing elit dolore suscipit, inventore aliquid...</p>
                                        <a href="#" className="main-btn" title="">
                                            <span className="mr-1">Read More</span>
                                            <i className="ti-angle-double-right gloabal-services-icon"></i>
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

export default ServicesSite;
