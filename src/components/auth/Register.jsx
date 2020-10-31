import React, { Component } from 'react';
import NavUserSite from "../inc/NavUserSite";

class Register extends Component {
    render() {
        return (
            <>
                <NavUserSite/>
                <div className="theme-layout">
                    <div className="container-fluid pdng0">
                        <div className="row merged">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="land-featurearea">
                                    <div className="land-meta">
                                        <h1>Winku</h1>
                                        <p>
                                            Winku is free to use for as long as you want with two active projects.
                                        </p>
                                        <div className="friend-logo">
                                            <span><img src="/assets/images/wink.png" alt=""/></span>
                                        </div>
                                        <a href="#" title="" className="folow-me">Follow Us on</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="log-reg-area global-log-reg-area reg">
                                    <h2 className="log-title">Register</h2>
                                    <p>
                                        Don’t use Winku Yet? <a href="#" title="">Take the tour</a> or <a href="#"
                                                                                                          title="">Join
                                        now</a>
                                    </p>
                                    <form method="post">
                                        <div className="form-group">
                                            <input type="text" required="required"/>
                                            <label className="control-label" htmlFor="input">First & Last Name</label><i
                                            className="mtrl-select"></i>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" required="required"/>
                                            <label className="control-label" htmlFor="input">User Name</label><i
                                            className="mtrl-select"></i>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" required="required"/>
                                            <label className="control-label" htmlFor="input">Password</label><i
                                            className="mtrl-select"></i>
                                        </div>
                                        <div className="form-radio">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="radio" defaultChecked="checked"/><i
                                                    className="check-box"></i>Male
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="radio"/><i className="check-box"></i>Female
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" required="required"/>
                                            <label className="control-label" htmlFor="input"><a
                                                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                                className="__cf_email__"
                                                data-cfemail="6c29010d05002c">[email&#160;protected]</a></label><i
                                            className="mtrl-select"></i>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" defaultChecked="checked"/><i
                                                className="check-box"></i>Accept
                                                Terms & Conditions ?
                                            </label>
                                        </div>
                                        <a href="#" title="" className="already-have">Already have an account</a>
                                        <div className="submit-btns">
                                            <button className="mtr-btn signup" type="button"><span>Register</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;
