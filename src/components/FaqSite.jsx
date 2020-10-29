import React, {Component} from 'react'
import HelmetSite from './inc/HelmetSite'

//import NavUserSite from './inc/NavUserSite'

export class FaqSite extends Component {
    render() {
        return (
            <>
                <HelmetSite title={`Faq page`}/>

                <div className="theme-layout">
                    <div className="responsive-header">
                        <div className="mh-head first Sticky">
			<span className="mh-btns-left">
				<a className="" href="#menu"><i className="fa fa-align-justify"></i></a>
			</span>
                            <span className="mh-text">
				
			</span>
                            <span className="mh-btns-right">
				<a className="fa fa-sliders" href="#shoppingbag"></a>
			</span>
                        </div>
                        <div className="mh-head second">
                            <form className="mh-form">
                                <input placeholder="search"/>
                                <a href="#/" className="fa fa-search"></a>
                            </form>
                        </div>
                        <nav id="menu" className="res-menu">
                            <ul>
                                <li><span>Home</span>
                                    <ul>
                                        <li><a href="index-2.html" title="">Home Social</a></li>
                                    </ul>
                                </li>
                                <li><span>Time Line</span>
                                    <ul>
                                        <li><a href="time-line.html" title="">timeline</a></li>


                                    </ul>
                                </li>
                                <li><span>Account Setting</span>
                                    <ul>
                                        <li><a href="create-fav-page.html" title="">create fav page</a></li>
                                       
                                    </ul>
                                </li>
                                <li><span>forum</span>
                                    <ul>
                                        <li><a href="forum.html" title="">Forum Page</a></li>
                                        <li><a href="forums-category.html" title="">Fourm Category</a></li>
                                        <li><a href="forum-open-topic.html" title="">Forum Open Topic</a></li>
                                        <li><a href="forum-create-topic.html" title="">Forum Create Topic</a></li>
                                    </ul>
                                </li>
                                <li><span>Our Shop</span>
                                    <ul>
                                        <li><a href="shop.html" title="">Shop Products</a></li>
                                        <li><a href="shop-masonry.html" title="">Shop Masonry Products</a></li>
                                        <li><a href="shop-single.html" title="">Shop Detail Page</a></li>
                                        <li><a href="shop-cart.html" title="">Shop Product Cart</a></li>
                                        <li><a href="shop-checkout.html" title="">Product Checkout</a></li>
                                    </ul>
                                </li>
                                <li><span>Our Blog</span>
                                    <ul>
                                        <li><a href="blog-grid-wo-sidebar.html" title="">Our Blog</a></li>
                                       
                                    </ul>
                                </li>
                                <li><span>Portfolio</span>
                                    <ul>
                                        <li><a href="portfolio-2colm.html" title="">Portfolio 2col</a></li>
                                     
                                    </ul>
                                </li>
                                <li><span>Support & Help</span>
                                    <ul>
                                        <li><a href="support-and-help.html" title="">Support & Help</a></li>
                                        <li><a href="support-and-help-detail.html" title="">Support & Help Detail</a>
                                        </li>
                                        <li><a href="support-and-help-search-result.html" title="">Support & Help Search
                                            Result</a></li>
                                    </ul>
                                </li>
                                <li><span>More pages</span>
                                    <ul>
                                        <li><a href="careers.html" title="">Careers</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html" title="">about</a></li>
                            </ul>
                        </nav>
                        <nav id="shoppingbag">
                            <div>
                                <div className="">
                                    <form method="post">
                                        <div className="setting-row">
                                            <span>use night mode</span>
                                            <input type="checkbox" id="nightmode"/>
                                            <label htmlFor="nightmode" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>Notifications</span>
                                            <input type="checkbox" id="switch2"/>
                                            <label htmlFor="switch2" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>Notification sound</span>
                                            <input type="checkbox" id="switch3"/>
                                            <label htmlFor="switch3" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>My profile</span>
                                            <input type="checkbox" id="switch4"/>
                                            <label htmlFor="switch4" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>Show profile</span>
                                            <input type="checkbox" id="switch5"/>
                                            <label htmlFor="switch5" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                    </form>
                                    <h4 className="panel-title">Account Setting</h4>
                                    <form method="post">
                                        <div className="setting-row">
                                            <span>Sub users</span>
                                            <input type="checkbox" id="switch6"/>
                                            <label htmlFor="switch6" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>personal account</span>
                                            <input type="checkbox" id="switch7"/>
                                            <label htmlFor="switch7" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>Business account</span>
                                            <input type="checkbox" id="switch8"/>
                                            <label htmlFor="switch8" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>Show me online</span>
                                            <input type="checkbox" id="switch9"/>
                                            <label htmlFor="switch9" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>Delete history</span>
                                            <input type="checkbox" id="switch10"/>
                                            <label htmlFor="switch10" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                        <div className="setting-row">
                                            <span>Expose author name</span>
                                            <input type="checkbox" id="switch11"/>
                                            <label htmlFor="switch11" data-on-label="ON" data-off-label="OFF"></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="topbar stick">
                        <div className="logo">
                            <a title="" href="newsfeed.html"><img src="images/logo.png" alt=""/></a>
                        </div>

                        <div className="top-area">
                            <ul className="main-menu">
                                <li>
                                    <a href="#" title="">Home</a>
                                    <ul>
                                        <li><a href="index-2.html" title="">Home Social</a></li>
                                        <li><a href="index2.html" title="">Home Social 2</a></li>
                                        <li><a href="index-company.html" title="">Home Company</a></li>
                                        <li><a href="landing.html" title="">Login page</a></li>
                                        <li><a href="logout.html" title="">Logout Page</a></li>
                                        <li><a href="newsfeed.html" title="">news feed</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="setting-area">
                                <li>
                                    <a href="#" title="Home" data-ripple=""><i className="ti-search"></i></a>
                                    <div className="searched">
                                        <form method="post" className="form-search">
                                            <input type="text" placeholder="Search Friend"/>
                                            <button data-ripple><i className="ti-search"></i></button>
                                        </form>
                                    </div>
                                </li>
                                <li><a href="newsfeed.html" title="Home" data-ripple=""><i className="ti-home"></i></a>
                                </li>
                                <li>
                                    <a href="#" title="Notification" data-ripple="">
                                        <i className="ti-bell"></i><span>20</span>
                                    </a>
                                    <div className="dropdowns">
                                        <span>4 New Notifications</span>
                                        <ul className="drops-menu">
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="/images/resources/thumb-1.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>sarah Loren</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag green">New</span>
                                            </li>
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="/images/resources/thumb-2.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>Jhon doe</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag red">Reply</span>
                                            </li>
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="/images/resources/thumb-3.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>Andrew</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag blue">Unseen</span>
                                            </li>
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="/images/resources/thumb-4.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>Tom cruse</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag">New</span>
                                            </li>
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="/images/resources/thumb-5.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>Amy</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag">New</span>
                                            </li>
                                        </ul>
                                        <a href="notifications.html" title="" className="more-mesg">view more</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" title="Messages" data-ripple=""><i
                                        className="ti-comment"></i><span>12</span></a>
                                    <div className="dropdowns">
                                        <span>5 New Messages</span>
                                        <ul className="drops-menu">
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="/images/resources/thumb-1.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>sarah Loren</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag green">New</span>
                                            </li>
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="/images/resources/thumb-2.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>Jhon doe</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag red">Reply</span>
                                            </li>
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="./..images/resources/thumb-3.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>Andrew</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag blue">Unseen</span>
                                            </li>
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="./../images/resources/thumb-4.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>Tom cruse</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag">New</span>
                                            </li>
                                            <li>
                                                <a href="notifications.html" title="">
                                                    <img src="./../images/resources/thumb-5.jpg" alt=""/>
                                                    <div className="mesg-meta">
                                                        <h6>Amy</h6>
                                                        <span>Hi, how r u dear ...?</span>
                                                        <i>2 min ago</i>
                                                    </div>
                                                </a>
                                                <span className="tag">New</span>
                                            </li>
                                        </ul>
                                        <a href="messages.html" title="" className="more-mesg">view more</a>
                                    </div>
                                </li>
                                <li><a href="#" title="Languages" data-ripple=""><i className="fa fa-globe"></i></a>
                                    <div className="dropdowns languages">
                                        <a href="#" title=""><i className="ti-check"></i>English</a>
                                        <a href="#" title="">Arabic</a>
                                        <a href="#" title="">Dutch</a>
                                        <a href="#" title="">French</a>
                                    </div>
                                </li>
                            </ul>
                            <div className="user-img">
                                <img src="./../images/resources/admin.jpg" alt=""/>
                                <span className="status f-online"></span>
                                <div className="user-setting">
                                    <a href="#" title=""><span className="status f-online"></span>online</a>
                                    <a href="#" title=""><span className="status f-away"></span>away</a>
                                </div>
                            </div>
                            <span className="ti-menu main-menu" data-ripple=""></span>
                        </div>
                    </div>

                    <section>
                        <div className="gap no-top">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="g-map">
                                            <div id="map-canvas"></div>
                                            <div className="map-meta">
                                                <h1>get in touch</h1>
                                                <p>this is a google map. you may see our location, or using street view
                                                    you may the original look of our office.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
                                                        <a href="#" title=""><i
                                                            className="fa fa-facebook-square"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title=""><i
                                                            className="fa fa-google-plus-square"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title=""><i className="fa fa-pinterest-square"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title=""><i
                                                            className="fa fa-twitter-square"></i></a>
                                                    </li>
                                                </ul>
                                                <h1 className="bg-cntct">Winku</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="widget">
                                        <div className="foot-logo">
                                            <div className="logo">
                                                <a href="index-2.html" title=""><img src="images/logo.png" alt=""/></a>
                                            </div>
                                            <p>
                                                The trio took this simple idea and built it into the world’s leading
                                                carpooling platform.
                                            </p>
                                        </div>
                                        <ul className="location">
                                            <li>
                                                <i className="ti-map-alt"></i>
                                                <p>33 new montgomery st.750 san francisco, CA USA 94105.</p>
                                            </li>
                                            <li>
                                                <i className="ti-mobile"></i>
                                                <p>+1-56-346 345</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="widget">
                                        <div className="widget-title"><h4>follow</h4></div>
                                        <ul className="list-style">
                                            <li><i className="fa fa-facebook-square"></i> <a
                                                href="https://web.facebook.com/shopcircut/" title="">facebook</a></li>
                                            <li><i className="fa fa-twitter-square"></i><a
                                                href="https://twitter.com/login?lang=en" title="">twitter</a></li>
                                            <li><i className="fa fa-instagram"></i><a
                                                href="https://www.instagram.com/?hl=en" title="">instagram</a></li>
                                            <li><i className="fa fa-google-plus-square"></i> <a
                                                href="https://plus.google.com/discover" title="">Google+</a></li>
                                            <li><i className="fa fa-pinterest-square"></i> <a
                                                href="https://www.pinterest.com/" title="">Pintrest</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="widget">
                                        <div className="widget-title"><h4>Navigate</h4></div>
                                        <ul className="list-style">
                                            <li><a href="about.html" title="">about us</a></li>
                                            <li><a href="contact.html" title="">contact us</a></li>
                                            <li><a href="terms.html" title="">terms & Conditions</a></li>
                                            <li><a href="#" title="">RSS syndication</a></li>
                                            <li><a href="sitemap.html" title="">Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="widget">
                                        <div className="widget-title"><h4>useful links</h4></div>
                                        <ul className="list-style">
                                            <li><a href="#" title="">leasing</a></li>
                                            <li><a href="#" title="">submit route</a></li>
                                            <li><a href="#" title="">how does it work?</a></li>
                                            <li><a href="#" title="">agent listings</a></li>
                                            <li><a href="#" title="">view All</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="widget">
                                        <div className="widget-title"><h4>download apps</h4></div>
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
                    <div className="bottombar">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                                    <i><img src="images/credit-cards.png" alt=""/></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default FaqSite
