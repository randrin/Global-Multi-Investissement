import React, { Component } from 'react';

class ProfileUserSite extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout = () => {
        console.log("handleLogout ......")
        localStorage.removeItem("globalConnected");
        window.location = "/"
    }

    render() {
        return (
            <>
                <ul className="setting-area">
                    <li>
                        <a href="#" title="Notification" data-ripple="">
                            <i className="ti-bell"></i><span>20</span>
                        </a>
                        <div className="dropdowns">
                            <span>4 New Notifications</span>
                            <ul className="drops-menu">
                                <li>
                                    <a href="notifications.html" title="">
                                        <img src="/assets/images/resources/thumb-1.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-2.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-3.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-4.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-5.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-1.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-2.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-3.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-4.jpg" alt=""/>
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
                                        <img src="/assets/images/resources/thumb-5.jpg" alt=""/>
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
                </ul>
                <div className="user-img">
                    <img src="/assets/images/resources/admin.jpg" alt=""/>
                    <span className="status f-online"></span>
                    <div className="user-setting">
                        {/*<a href="#" title=""><span className="status f-online"></span>online</a>
                         <a href="#" title=""><span className="status f-away"></span>away</a>
                         <a href="#" title=""><span className="status f-off"></span>offline</a>*/}
                        <a href="#" title=""><i className="ti-user"></i> view profile</a>
                        <a href="#" title=""><i className="ti-pencil-alt"></i>edit profile</a>
                        <a href="#" title=""><i className="ti-target"></i>activity log</a>
                        <a href="#" title=""><i className="ti-settings"></i>account setting</a>
                        <a href="#" title="" onClick={() => this.handleLogout()}><i className="ti-power-off"></i>log out</a>
                    </div>
                </div>
            </>
        );
    }
}

export default ProfileUserSite;
