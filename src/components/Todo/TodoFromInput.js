import React, { useState } from "react";

const TodoFormInput = props => {
  const [question, setQuestion] = useState('')

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
        <button   
          onClick = {() => props.onAddTask({title: question})}>
            {props.btnType === 'add' ? 'Add' : 'Save' }
        </button>
      </div>
    </div>
  )
};

export default TodoFormInput;
