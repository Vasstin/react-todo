import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import './TodoItem.css';
//import Item from './Item';
import TodoForm from './TodoForm'

const TodoItem = props => {
  const [ editState, setEditState ] = useState(false)
  const [ formState, setFormState ] = useState(false);
  const [ checkboxState, setCheckboxState ] = useState(false)
  
  const editTaskHandler = () => {
    setEditState(true)
    setFormState(false)
  }

  const removeFormHandler = (state) => {
    setEditState(false)
    setFormState(state)
  }
  //console.log(props.id)
  let form = null
  let li = (

    <li className = 'todoItemLi'>
      <input 
        checked = {checkboxState} 
        id = {props.id}
        name = 'inputTitle' 
        type = "checkbox"
        onChange = {() => {setCheckboxState(!checkboxState)}}
      /> 
      <div className = {checkboxState === true ? 'disabled' : 'inputBox'}>
        <label htmlFor = {props.id} >{props.title}</label>
        <button disabled = {checkboxState} onClick = {editTaskHandler}>Edit</button>
        <button disabled = {checkboxState} onClick = {props.onRemoveTask.bind(this, props.id)}>Delete</button>
      </div>
    </li>
  )
  
  if(editState) {
    form = 
      <TodoForm 
        onRemoveForm = {removeFormHandler} 
        onRemoveTask = {props.onRemoveTask} 
        onAddTask = {props.onAddTask} 
        onEditTask = {props.onEditTask}
        id = {props.id}
        close = {true} 
        formStyle = 'edit-form' 
        btnType = {'save'}  /*task = {task}*/ 
      />
    li = null
  } 

  if(formState) {
    form = null
    li = (
      <li className = 'todoItemLi' >
      <input 
        checked = {checkboxState} 
        id = {props.id}
        name = 'inputTitle' 
        type = "checkbox"
        onChange = {() => {setCheckboxState(!checkboxState)}}
      /> 
      <div className = {checkboxState === true ? 'disabled' : 'inputBox'}>
        <label htmlFor = {props.id} >{props.title}</label>
        <button disabled = {checkboxState} onClick = {editTaskHandler}>Edit</button>
        <button disabled = {checkboxState} onClick = {props.onRemoveTask.bind(this, props.id)}>Delete</button>
      </div>
    </li>
    )
  }
 
  return (
    <div>
      {form}
      {li}
    </div>
    
  )
};

export default TodoItem;
