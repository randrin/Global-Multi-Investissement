import React, { Component } from 'react';

class NewsLettersSite extends Component {
    render() {
        return (
            <section>
                <div className="gap100 pattern">
                    <div className="bg-image"
                         style={{backgroundImage: 'url(/assets/images/resources/newsletter-bg.jpg)', backgroundRepeat: 'no-repeat'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="news-letter">
                                    <h2>Newsletter <span>Signup</span></h2>
                                    <span>Shortest Way To Explore What Will Happen On Enternity</span>
                                    <form method="post">
                                        <input type="text" placeholder="Please Type Email Id" className="emails"/>
                                            <button>Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NewsLettersSite;
