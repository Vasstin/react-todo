import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList'
// import Search from './Search';

function Todo() {
  const [task, setTask] = useState([]);
  
  const addTaskHandler = task => {
    setTask(prevTask => [...prevTask, {id: Math.random().toString(), ...task}])
  }

  const removeTaskHandler = id => {
    setTask(prevTask => prevTask.filter(ing => ing.id !== id))
  }
  
  // const editTaskHandler = (id) => {

  // }

  return (
    <div className="App">
      <TodoForm onAddTask = {addTaskHandler} />
      <section>
       <TodoList task = {task} onRemoveTask = {removeTaskHandler}/* onEditTask = {editTaskHandler}*/ />
      </section>
    </div>
  );
}

export default Todo;
