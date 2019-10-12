import React from 'react';
import {Provider} from 'react-redux'

import ToDo from './components/todo/todo.js';
import Login from './components/auth/login.js';

import createStore from './store/index.js'

const store = createStore();


export default class App extends React.Component {
  render() {
    return (
      <>
        <Login />
        <Provider store={store}>
          <ToDo/>
        </Provider>
      
      </>
    );
  }
}
