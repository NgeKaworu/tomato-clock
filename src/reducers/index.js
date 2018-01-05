import { combineReducers } from "redux";
import clock from "./clock";
import runtime from "./runtime";

const rootReducer = combineReducers({
    clock,
    runtime
})

export default rootReducer