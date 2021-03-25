import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './TodoForm';
import TodoList from './TodoList'
// import Search from './Search';

function Todo() {
  const [task, setTask] = useState([]);
  
  const addTaskHandler = task => {
    setTask(prevTask => [...prevTask, {id: uuidv4(), ...task}])
  }

  const removeTaskHandler = id => {
    setTask(prevTask => prevTask.filter(ing => ing.id !== id))
  }
  

  return (
    <div className="App">
      <TodoForm onAddTask = {addTaskHandler} btnType = {'add'}/>
      <section>
       <TodoList task = {task} onRemoveTask = {removeTaskHandler} />
      </section>
    </div>
  );
}

export default Todo;
