import { ADD_TODO, DELETE_TODO } from './types';


export const addTodo = (todo) => ({ type: ADD_TODO, data: todo });
export const deleteTodo = (key) => ({ type: DELETE_TODO, key: key });
