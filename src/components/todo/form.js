import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v4';
import Form from "react-jsonschema-form";
import {connect} from 'react-redux';
import * as actions from '../../store/todo.store';

const schemaURL = 'https://api-js401.herokuapp.com/api/v1/todo/schema';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' }
}

function TodoForm(props) {

  const [schema, setSchema] = useState({});

  const addItem = (form) => {
    console.log(form);
    form.formData.id = uuid();
    props.addItem(form.formData);
  };
  
  const deleteItem = id => {
    props.deleteTodo(id);
  };

  const toggleComplete = id => {
    props.toggleComplete(id);
  };

  useEffect( () => {
    fetch( schemaURL )
     .then(results => results.json() )
     .then(schemaObject => setSchema(schemaObject))
  }, []); 

  console.log(schema);

  return (
    <div>
    <Form
    schema={schema}
    uiSchema={uiSchema}
    onSubmit={addItem}
    />
  </div>
  )
}

const mapStateToProps = state => ({
  todoList: state.todos
});

const mapDispatchToProps = (dispatch, getState) => ({
  addItem: data => dispatch(actions.addItem(data)),
  deleteItem: data => dispatch(actions.deleteItem(data)),
  toggleComplete: data => dispatch(actions.toggleComplete(data)), 
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
