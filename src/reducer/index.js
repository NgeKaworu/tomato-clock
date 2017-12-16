import { combineReducers } from "redux";
import clock from "./clock";
import todos from "./todos";

const tomatoTodo = combineReducers({
    clock,
    todos
})

export default tomatoTodo;