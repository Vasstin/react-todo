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
  console.log(task)

  const editTaskHandler = (id, newTask) => {
    const arr = task.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: newTask
        }
      } else {
        return item
      }
    })
  
    setTask(arr)

    // setTask(task.map(item => {
    //   if (item.id === id) {
    //     console.log(item)
    //     return {
    //       ...item,
    //       title: newTask
    //     }
    //   } else {
    //     console.log(item)
    //     return item
    //   }
    // }))

    // setTask(prevTask => [...prevTask.map(item => {
    //   if(item.id === id) {
    //     return item.title = newTask
    //   }
    // })])
    //setTask(prevTask => [...prevTask, {id: uuidv4(), ...task}])
    //setTask(prevTask => prevTask.filter(ing => ing.id !== id))
  }
  //console.log(task)


  // const removeFormHandler = task => {
  //   setTask(prevTask => [...prevTask, {id: uuidv4(), ...task}])
  // }
  
  return (
    <div className="App">
      <TodoForm 
        onAddTask = {addTaskHandler} 
        onRemoveTask = {removeTaskHandler}
        // onEditTask = {editTaskHandler}
        btnType = {'add'}
      />
      <section>
       <TodoList /*onRemoveForm = {removeFormHandler}*/ 
          onAddTask = {addTaskHandler} /*вложенная форма*/
          onEditTask = {editTaskHandler}
          task = {task} 
          onRemoveTask = 
          {removeTaskHandler} 
       />
      </section>
    </div>
  );
}

export default Todo;
