import React, { Component } from 'react';
import NavUserSite from "../inc/NavUserSite";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const {username, password} = this.state;
        if(username === 'test' && password === 'globaltest') {
            localStorage.setItem("globalConnection", true);
            window.location = '/'
        }
    }

    componentDidMount() {
        if(localStorage.getItem("globalConnection")) {
            window.location = "/";
        }
    }

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
                                        <h1>Global Invest</h1>
                                        <p>
                                            Global Invest is a new innovation improving services banking.
                                        </p>
                                        <div className="friend-logo">
                                            <span><img src="/assets/images/wink.png" alt=""/></span>
                                        </div>
                                        <a href="#" title="" className="folow-me">Follow Us on</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="login-reg-bg">
                                    <div className="log-reg-area sign">
                                        <h2 className="log-title">Login</h2>
                                        <p>
                                            Don’t use Global Invest Yet? <a href="#" title="">Take the tour</a> or <a
                                            href="#"
                                            title="">Join
                                            now</a>
                                        </p>
                                        <form method="post" onSubmit={this.handleOnSubmit}>
                                            <div className="form-group">
                                                <input type="text" name="username" onChange={this.handleFieldChange}
                                                       value={this.state.username} id="username" required="required"/>
                                                <label className="control-label" htmlFor="username">Username</label><i
                                                className="mtrl-select"></i>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" onChange={this.handleFieldChange} id="password" required="required"/>
                                                <label className="control-label" htmlFor="password">Password</label><i
                                                className="mtrl-select"></i>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" defaultChecked="checked"/><i
                                                    className="check-box"></i>Always
                                                    Remember Me.
                                                </label>
                                            </div>
                                            <a href="#" title="" className="forgot-pwd">Forgot Password?</a>
                                            <div className="submit-btns">
                                                <button className="mtr-btn signin" type="submit"><span>Login</span>
                                                </button>
                                            </div>
                                            <div className="form-group">
                                                <p>
                                                    <span>New user? </span>
                                                    <a href="/register" className="underline already-have">Open your
                                                        account</a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
