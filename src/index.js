import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import tasksReducer from "./reducer/task";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(tasksReducer);

ReactDOM.render(
<Provider store={store}>
    <Main />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
