import React, { Component } from 'react';

class ServicesSite extends Component {
    render() {
        return (
            <section>
                <div className="gap100 gray-bg">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Our Services</h2>
                            </div>
                        </div>
                        <div className="servic-category">
                            <div className="row merged">
                                <div className="col-lg-4 col-md-6">
                                    <div className="category-box selected">
                                        <i className="fa fa-wordpress"></i>
                                        <h2>WordPress Services</h2>
                                        <p>Met consectetur adipisicing elit dolore suscipit, inventore aliquid...</p>
                                        <a href="#" className="main-btn" title="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="category-box">
                                        <i className="fa fa-html5"></i>
                                        <h2>Html Services</h2>
                                        <p>Met consectetur adipisicing elit dolore suscipit, inventore aliquid...</p>
                                        <a href="#" className="main-btn" title="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="category-box">
                                        <i className="fa fa-google-wallet"></i>
                                        <h2>Design Services</h2>
                                        <p>Met consectetur adipisicing elit dolore suscipit, inventore aliquid...</p>
                                        <a href="#" className="main-btn" title="">Read More</a>
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
