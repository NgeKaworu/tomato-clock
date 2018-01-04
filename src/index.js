import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/clock";
import logger from "redux-logger"
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import "./app.css";

const store = createStore(
    reducer,
    applyMiddleware(logger)
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
