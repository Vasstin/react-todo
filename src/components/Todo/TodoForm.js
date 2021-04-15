import React from 'react';

import Card from '../UI/Card';
import TodoFormInput from './TodoFromInput'
import './TodoForm.css';

const TodoForm = React.memo(props => {
  
  return (
    <section className = {props.formStyle === 'edit-form' ? 'edit-form' : 'todo-form'} >
      <Card>
        <TodoFormInput 
          onRemoveForm = {props.onRemoveForm} 
          onRemoveTask = {props.onRemoveTask} 
          onAddTask = {props.onAddTask}
          onEditTask = {props.onEditTask}
          btnType = {props.btnType}
          id = {props.id}
        />
      </Card>
    </section>
  );
});

export default TodoForm;
