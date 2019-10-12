import React, { useEffect, useReducer } from "react";
import { callAPI } from '../../lib/api.js';
import { When } from "../if";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import TodoItem from "./item.js";

import Auth from '../auth/auth.js';
import useQ from '../../hooks/q.js';

import "./todo.scss";

function ToDo(props){
  return (
    <>
    <Auth>
        <Auth capability="create">
            <TodoForm />
        </Auth>
          <TodoList/>
    </Auth>
    </>
  );
};

export default ToDo;
