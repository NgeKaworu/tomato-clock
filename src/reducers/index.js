import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import clock from "./clock";
import clockSwitch from "./clockSwitch";
import runtime from "./runtime";
import auth from "./auth";
import todos from "./todos";
import currentId from './currentId';


const rootReducer = combineReducers({
    clock,
    runtime,
    auth,
    clockSwitch,
    todos,
    currentId,
    router: routerReducer
})

export default rootReducer