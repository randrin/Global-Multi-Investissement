import React, { Fragment, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import IndexSite from "../components/IndexSite";
import AboutSite from "../components/site/pages/AboutSite";
import FaqSite from "../components/site/pages/FaqSite";
import ContactSite from "../components/site/pages/ContactSite";
import Error404Site from "../components/site/pages/Error404Site";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";


const RoutesSite = (props) => (

    <Fragment>
        <Suspense fallback={"wait"}>
            <Switch>
                <Route exact path="/" component={IndexSite} />
                <Route exact path="/login" component={withRouter(Login)} />
                <Route exact path="/register" component={withRouter(Register)} />
                <Route exact path="/about/" component={AboutSite} />
                <Route exact path="/faq/" component={withRouter(FaqSite)} />
                <Route exact path="/contact/" component={withRouter(ContactSite)} />
                <Route component={Error404Site} />
            </Switch>
        </Suspense>
    </Fragment>

);
export default RoutesSite;
