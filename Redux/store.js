import { create } from 'react-test-renderer';
import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    todoReducer: todoReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;