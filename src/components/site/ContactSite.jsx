import React, { Component } from 'react';
import HelmetSite from "../inc/HelmetSite";
import NavUserSite from "../inc/NavUserSite";
import FooterUserSite from "../inc/FooterUserSite";

class ContactSite extends Component {
    render() {
        return (
            <div>
                <HelmetSite title={`Contact Page | Global Multi Investissement`}/>
                <NavUserSite/>
                <section>
                    <div className="gap no-top">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="g-map">
                                        <div id="map-canvas"></div>
                                        <div className="map-meta">
                                            <h1>get in touch</h1>
                                            <p>this is a google map. you may see our location, or using street view you
                                                may the original look of our office.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*google map*/}

                <section>
                    <div className="gap no-top overlap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contct-info">
                                        <div className="contact-form">
                                            <div className="cnt-title">
                                                <span>Send us a message</span>
                                                <i><img src="/assets/images/envelop.png" alt=""/></i>
                                            </div>
                                            <form method="post">
                                                <div className="form-group">
                                                    <input type="text" id="input" required="required"/>
                                                    <label className="control-label" htmlFor="input">First & Last
                                                        Name</label><i className="mtrl-select"></i>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" required="required"/>
                                                    <label className="control-label" htmlFor="input"><a
                                                        href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                                        className="__cf_email__"
                                                        data-cfemail="5e1b333f37321e">[email&#160;protected]</a></label><i
                                                    className="mtrl-select"></i>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" required="required"/>
                                                    <label className="control-label" htmlFor="input">Phone No.</label><i
                                                    className="mtrl-select"></i>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" required="required"/>
                                                    <label className="control-label" htmlFor="input">Company</label><i
                                                    className="mtrl-select"></i>
                                                </div>
                                                <div className="form-group">
                                                    <textarea rows="4" id="textarea" required="required"></textarea>
                                                    <label className="control-label"
                                                           htmlFor="textarea">Message</label><i
                                                    className="mtrl-select"></i>
                                                </div>
                                                <div className="submit-btns">
                                                    <button className="mtr-btn signup" type="button"><i
                                                        className="fa fa-paper-plane"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="cntct-adres">
                                            <h3>contact info</h3>
                                            <ul>
                                                <li>
                                                    <i className="ti-location-pin"></i>
                                                    <span>360 king street feasterville trevose, PA 19054</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-mobile-phone"></i>
                                                    <span>(800) 900-200-300</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope-o"></i>
                                                    <span><a href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                                             className="__cf_email__"
                                                             data-cfemail="cba2a5ada48bb2a4beb9a6aaa2a7e5a8a4a6">[email&#160;protected]</a></span>
                                                </li>
                                            </ul>
                                            <ul className="social-media">
                                                <li>
                                                    <a href="#" title=""><i className="fa fa-facebook-square"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" title=""><i
                                                        className="fa fa-google-plus-square"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" title=""><i className="fa fa-pinterest-square"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" title=""><i className="fa fa-twitter-square"></i></a>
                                                </li>
                                            </ul>
                                            <h1 className="bg-cntct">Global Multi Investissement</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*contact info*/}
                <FooterUserSite/>
            </div>
        );
    }
}

export default ContactSite;
