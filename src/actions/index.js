import * as types from "../constants/ActionTypes";

export const addTodo = text => ({ type: types.ADD_TODO, text });            /* action creator */
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text });