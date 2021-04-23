import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './TodoForm';
import TodoList from './TodoList'
// import Search from './Search';

function Todo() {
  // useEffect(() => {
  //   setTask(JSON.parse(localStorage.getItem('task')) || [])
  // }, [])

  const [task, setTask] = useState(JSON.parse(localStorage.getItem('task')) || []);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task))
  },[task])

  
  const addTaskHandler = title => {
    setTask([...task, {id: uuidv4(), title, done: false}])
  }

  const removeTaskHandler = id => {
    setTask(prevTask => prevTask.filter(ing => ing.id !== id))
  }

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
  const editTodoDoneStat = (id) => {
    const arr = task.map(todo => {
      if (todo.id = id) {
        return {
          ...todo,
          done: !todo.done
        } 
      } else {
        return todo
      }
    })

    //console.log(arr)
    setTask(arr)
  }

  return (
    <div className="App">
      <TodoForm 
        onAddTask = {addTaskHandler} 
        onRemoveTask = {removeTaskHandler}
        btnType = {'add'}
      />
      <section>
       <TodoList /*onRemoveForm = {removeFormHandler}*/ 
          onAddTask = {addTaskHandler} /*вложенная форма*/
          onEditTask = {editTaskHandler}
          onEditTodoDoneStat = {editTodoDoneStat}
          task = {task} 
          onRemoveTask = {removeTaskHandler} 
       />
      </section>
    </div>
  );
}

export default Todo;
