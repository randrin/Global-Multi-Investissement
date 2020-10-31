import React, { Component } from 'react';

class FooterUserSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date().getFullYear()
        }
    }

    render() {
        const {currentDate} = this.state;
        return (
            <>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="widget">
                                    <div className="foot-logo">
                                        <div className="logo">
                                            <a href="index-2.html" title=""><img src="/assets/images/logo.png" alt=""/></a>
                                        </div>
                                        <p>
                                            The trio took this simple idea and built it into the world’s leading
                                            carpooling
                                            platform.
                                        </p>
                                    </div>
                                    <ul className="location">
                                        <li>
                                            <i className="ti-map-alt global-footer-icon"></i>
                                            <p>33 new montgomery st.750 san francisco, CA USA 94105.</p>
                                        </li>
                                        <li>
                                            <i className="ti-mobile global-footer-icon"></i>
                                            <p>+1-56-346 345</p>
                                        </li>
                                    </ul>
                                    <br />
                                    <div className="widget-title"><h4>Follow Us On</h4></div>
                                    <ul className="global-footer-list-social">
                                        <li>
                                            <a href="#" title="" className="global-footer-social-icon global-btn-facebook"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" title="" className="global-footer-social-icon global-btn-twitter"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"className="global-footer-social-icon global-btn-instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title"><h4>Compagny</h4></div>
                                    <ul className="list-style">
                                        <li><a href="/about">about us</a></li>
                                        <li><a href="#">Security</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Affiliate</a></li>
                                        <li><a href="#">Partners</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title"><h4>Our Services</h4></div>
                                    <ul className="list-style">
                                        <li><a href="#">Service 1</a></li>
                                        <li><a href="#">Service 2</a></li>
                                        <li><a href="#">Service 3</a></li>
                                        <li><a href="#">Service 4</a></li>
                                        <li><a href="#">Service 5</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title"><h4>Customers</h4></div>
                                    <ul className="list-style">
                                        <li><a href="#">Invite Friends</a></li>
                                        <li><a href="#">Reviews</a></li>
                                        <li><a href="#">Customer Support</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title"><h4>Support & Socials</h4></div>
                                    <ul className="list-style">
                                        <li>
                                            <a href="#" title="">
                                                <i className="ti-help global-footer-icon"></i> Support & Help
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="ti-comments global-footer-icon"></i> Community & Social
                                            </a>
                                        </li>
                                        <li><a href="#" title="">
                                            <i className="ti-location-pin global-footer-icon"></i> Where to find us
                                        </a></li>
                                    </ul>
                                    <br />
                                    <div className="widget-title"><h4>Download Apps</h4></div>
                                    <ul className="colla-apps">
                                        <li><a href="https://play.google.com/store?hl=en" title=""><i
                                            className="fa fa-android"></i>android</a></li>
                                        <li><a href="https://www.apple.com/lae/ios/app-store/" title=""><i
                                            className="ti-apple"></i>iPhone</a></li>
                                        <li><a href="https://www.microsoft.com/store/apps" title=""><i
                                            className="fa fa-windows"></i>Windows</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*Footer*/}
                <div className="bottombar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <span className="copyright">Copyright © {currentDate} -
                                    <a href="/"
                                       className="global-footer-title underline">Global Multi Investissement</a> . Realized by <a
                                        target="_blank" href={'www.kazougroup.com'}>KazouGroup Srl</a>
                                </span>
                                <i>
                                    <a href="/privacy-policy" className="underline global-footer-link">Privacy
                                        Policy</a>
                                    <span className="global-bullet"></span>
                                    <a href="/conditions-terms" className="underline global-footer-link">Terms &
                                        Conditions</a>
                                    <span className="global-bullet"></span>
                                    <a href="/cookies" className="underline global-footer-link">Cookies</a>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterUserSite;
