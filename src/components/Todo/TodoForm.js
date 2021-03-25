import React, { useState } from 'react';

import Card from '../UI/Card';
import TodoFormInput from './TodoFromInput'
import './TodoForm.css';

const TodoForm = React.memo(props => {

  // const submitHandler = event => {
  //   event.preventDefault();
  //   props.onAddTask({title: question})
  // };
  return (
    <section className="todo-form">
      <Card>
        <TodoFormInput onAddTask = {props.onAddTask} btnType = {props.btnType}/>
      </Card>
    </section>
  );
});

export default TodoForm;
