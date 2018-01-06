import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import logger from "redux-logger"
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import "./app.css";

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
