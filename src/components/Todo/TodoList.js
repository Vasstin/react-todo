import React from 'react';

import './TodoList.css';

const TodoList = props => {
  const edit = (id) => {
    

  }
  return (
    <section className="ingredient-list">
      <h2>Loaded Tasks</h2>
      <ul>
        {props.task.map(ig => (
          <li key={ig.id} >
            <span>{ig.title}</span>
            <button onClick = {edit()}>Edit</button>
            <button onClick = {props.onRemoveTask.bind(this, ig.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </section>
  );
};

export default TodoList;
