import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import './TodoItem.css';
import Item from './Item';
import TodoForm from './TodoForm'

const TodoItem = props => {
  const [ editState, setEditState ] = useState(false)
  const [formState, setFormState] = useState(false);
  
  // const saveTaskHandler = task => {
  //   setTask(prevTask => [...prevTask, {id: uuidv4(), ...task}])
  // }
  const editTaskHandler = () => {
    setEditState(true)
  }

  const removeFormHandler = (state) => {
    setFormState(state)
  }

  let form = null
  let li = (
    <Item 
      title = {props.title}
      id = {props.id}>
        <button onClick = {editTaskHandler}>Edit</button>
        <button onClick = {props.onRemoveTask.bind(this, props.id)}>Delete</button>
    </Item>
  )
  
  if(editState) {
    form = <TodoForm onRemoveForm = {removeFormHandler} onRemoveTask = {props.onRemoveTask} onAddTask = {props.onAddTask} close = {true} formStyle = 'edit-form' btnType = {'save'}  /*task = {task}*/ />
    li = null
  } 

  if(formState) {
    form = null
  }
 
  return (
    <div>
      {form}
      {li}
    </div>
    
  )
};

export default TodoItem;
