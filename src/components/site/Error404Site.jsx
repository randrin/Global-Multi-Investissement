import React, { Component } from 'react';

class Error404Site extends Component {
    render() {
        return (
            <div className="container-fluid pdng0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-page">
                            <div className="bg-image global-bg-image"></div>
                            <div className="error-meta">
                                <h1>whoops!</h1>
                                <span>we couldn't find that page </span>
                                <a href="/" title="">Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error404Site;
