import React, { Fragment, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import IndexSite from "../components/IndexSite";
import AboutSite from "../components/site/AboutSite";
import FaqSite from "../components/site/FaqSite";
import ContactSite from "../components/site/ContactSite";
import Error404Site from "../components/site/Error404Site";


const RoutesSite = () => (

    <Fragment>
        <Suspense fallback={"wait"}>
            <Switch>
                <Route exact path="/" component={IndexSite} />
                <Route exact path="/about/" component={AboutSite} />
                <Route exact path="/faq/" component={withRouter(FaqSite)} />
                <Route exact path="/contact/" component={withRouter(ContactSite)} />
                <Route component={Error404Site} />
            </Switch>
        </Suspense>
    </Fragment>

);
export default RoutesSite;
