import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../context/settings.js';
import { Unless, When } from '../if/';
import {connect} from 'react-redux'
import Auth from '../auth/auth.js';

import * as actions from '../../store/todo.store.js';

const TodoList = (props) => {

  const [page, setPage] = useState(0);
  const context = useContext(SettingsContext);

  const start = context.maxVisible * page;
  const end = start + context.maxVisible;

  const list = props.list ? props.list.slice(start, end) : [];

  return (
    <>
      <ul>
        {list.map(item => (
          // <Unless condition={item.complete && !props.settings.toggleCompleted}>
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span onClick={() => props.toggleComplete(item._id)}>
                {item.text}
              </span>
              <button onClick={() => props.handleDetails(item._id)}>
                Details
              </button>
                <button onClick={() => props.deleteTodo(item._id)}>
                  Delete
                </button>
            </li>
          // </Unless>
        ))}
      </ul>

      <When condition={page > 0}>
        <button onClick={() => setPage(page - 1)}>Previous</button>
      </When>

      <When condition={props.list.length > end}>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </When>

    </>
  );
};

const mapStateToProps = (state) => ({
  list: state.todo,
  settings: state.settings
});

const mapDispatchToProps = (dispatch, getState) => ({
  deleteTodo: data => dispatch(actions.deleteItem(data)),
  toggleComplete: data => dispatch(actions.toggleComplete(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
