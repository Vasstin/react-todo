import React from 'react';

import './TodoList.css';
import Form from './Form';

const TodoList = props => {
  const editTaskHandler = (id) => {
    
  }

  return (
    <section className="ingredient-list">
      <h2>Loaded Tasks</h2>
      <ul>
        {props.task.map(ig => (
          <li key={ig.id} >
            <span>{ig.title}</span>
            <Form />
            <button onClick = {editTaskHandler()}>Edit</button>
            <button onClick = {props.onRemoveTask.bind(this, ig.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </section>
  );
};

export default TodoList;
