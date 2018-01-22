import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import clock from "./clock";
import clockSwitch from "./clockSwitch";
import runtime from "./runtime";
import auth from "./auth";
import todo from "./todo";
import currentId from './currentId';


const rootReducer = combineReducers({
    clock,
    runtime,
    auth,
    clockSwitch,
    todo,
    currentId,
    router: routerReducer
})

export default rootReducer