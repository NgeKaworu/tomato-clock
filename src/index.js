import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from "history/createBrowserHistory";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from "./reducers";
import logger from "redux-logger"
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";

import 'bootstrap/dist/css/bootstrap.css';
import "./app.css";

const history = createHistory();
const routerHistoryMiddleware = routerMiddleware(history);
const middleware = [ thunk, routerHistoryMiddleware ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

const store = createStore(
    combineReducers({
        reducer,
        router: routerReducer
    }),
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
