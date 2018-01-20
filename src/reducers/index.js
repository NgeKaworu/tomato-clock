import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import clock from "./clock";
import runtime from "./runtime";
import auth from "./auth";
import clockSwitch from "./clockSwitch";

const rootReducer = combineReducers({
    clock,
    runtime,
    auth,
    clockSwitch,
    router: routerReducer
})

export default rootReducer