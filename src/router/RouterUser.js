import React, { Fragment, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import IndexSite from "../components/IndexSite";
import AboutSite from "../components/AboutSite";
import FaqSite from "../components/FaqSite";



const RouterUser = () => (

    <Fragment>
        <Suspense fallback={"wait"}>
            <Switch>
                <Route exact path="/" component={IndexSite} />
                <Route exact path="/about/" component={AboutSite} />
                <Route exact path="/faq/" component={withRouter(FaqSite)} />

            </Switch>
        </Suspense>
    </Fragment>

);
export default RouterUser;
