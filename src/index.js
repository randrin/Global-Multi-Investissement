import React from 'react';
import ReactDOM from 'react-dom';
/** Import librairy generare */
import { BrowserRouter, Route } from 'react-router-dom';

//import ReactGA from 'react-ga';
//import Cookies from 'universal-cookie';

/** Include scss */
import './global.scss';
/** End */



import RoutesSite from "./routes/RoutesSite";

/** Import redux */
import { Provider } from "react-redux";
import store from "./redux/store";
/** End */
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={RoutesSite} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('global-investissement')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
