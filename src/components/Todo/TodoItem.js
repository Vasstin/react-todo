import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './TodoItem.css';
import Item from './Item';
import TodoForm from './TodoForm'

const TodoItem = props => {
  const [ editState, setEditState ] = useState(false)
  // const [task, setTask] = useState([]);
  
  // const saveTaskHandler = task => {
  //   setTask(prevTask => [...prevTask, {id: uuidv4(), ...task}])
  // }
  const editTaskHandler = () => {
    setEditState(true)
  }

  let form = null
  let li = (
    <Item 
      title = {props.title}
      onRemoveTask = {props.onRemoveTask}
      id = {props.id}>
        <button onClick = {editTaskHandler}>Edit</button>
        <button onClick = {props.onRemoveTask.bind(this, props.id)}>Delete</button>
    </Item>
  )
  
  if(editState) {
    // form = <Form onSaveTask = {saveTaskHandler} task = {task}/>
    form = <TodoForm btnType = {'save'}  /*task = {task}*/ />
    li = null
  }

  return (
    <div>
      {form}
      {li}
    </div>
    
  )
};

export default TodoItem;
