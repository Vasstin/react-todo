import React, { useState } from 'react';

import './TodoItem.css';
import Form from './Form';
import Item from './Item';

const TodoItem = props => {

  const [ editState, setEditState ] = useState(false)

  const editTaskHandler = () => {
    setEditState(true)
  }

  let form = null
  let li = (
    <Item 
    title = {props.title}
    onRemoveTask = {props.onRemoveTask}
    id = {props.id}
  ><button onClick = {editTaskHandler}>Edit</button>
    <button onClick = {props.onRemoveTask.bind(this, props.id)}>Delete</button></Item>
  )
  

  if(editState) {
    form = <Form />
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
