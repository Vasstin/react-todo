import React, { useState } from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = props => {
 

  return (
    <section className="ingredient-list">
      <h2>Loaded Tasks</h2>
      <ul>
        {props.task.map(ig => (
         <TodoItem 
            key = {ig.id} 
            title = {ig.title}
            onRemoveTask = {props.onRemoveTask}
            id = {ig.id}
         />
        ))}
      </ul>
      
    </section>
  );
};

export default TodoList;
