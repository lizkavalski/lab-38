import {createStore, combineReducers} from 'redux';

import todoReducer from './todo.store.js';


let reducers = combineReducers({
    todo:todoReducer,
 
})

export default ()=> createStore(reducers)