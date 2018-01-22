import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from "../constants/ActionTypes";

export const addTodo = text => ({ type: ADD_TODO, text })
export const deleteTodo = id => ({ type: DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })
export const completeTodo = id => ({ type: COMPLETE_TODO, id })
export const completeAll = () => ({ type: COMPLETE_ALL })
export const clearCompleted = () => ({ type: CLEAR_COMPLETED })