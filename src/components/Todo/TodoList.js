import React from 'react';


import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = props => {
 
  console.log(props.task)
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
              onAddTask = {props.onAddTask}
              onRemoveForm = {props.onRemoveForm}
              onEditTask = {props.onEditTask}
            />
         
        ))}
      </ul>
      
    </section>
  );
};

export default TodoList;
