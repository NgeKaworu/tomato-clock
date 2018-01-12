import { combineReducers } from "redux";
import clock from "./clock";
import runtime from "./runtime";
import auth from "./auth";

const rootReducer = combineReducers({
    clock,
    runtime,
    auth
})

export default rootReducer