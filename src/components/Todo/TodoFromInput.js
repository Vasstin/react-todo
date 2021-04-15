import React, { useState } from "react";

const TodoFormInput = props => {
  const [question, setQuestion] = useState('')
  
  let button = null
  const sumFunk = () => {
    props.onEditTask(props.id, question)
    //props.onAddTask({title: question})
    props.onRemoveForm(true)
    
  }

  if(props.btnType === 'add') {
    button = <button
    className = {props.className}  
    onClick = {() => props.onAddTask({title: question})}>
      {props.btnType === 'add' ? 'Add' : 'Save' }
  </button>
  } else {
    button = <button
    className = {props.className}  
    onClick = {(() => sumFunk())}>
      {props.btnType === 'add' ? 'Add' : 'Save' }
  </button>
  }



  return (
    <div>
      <div className="form-control">
        <input 
          type="text" 
          id="title" 
          placeholder = "What todo?" 
          value = {question} 
          onChange = {event => setQuestion(event.target.value)}
        />
      </div>
      <div className="ingredient-form__actions">
      {button}
      </div>
    </div>
  )
};

export default TodoFormInput;
