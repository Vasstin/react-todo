import React, { useState } from 'react';

import Card from '../UI/Card';
import './TodoForm.css';

const TodoForm = React.memo(props => {
  const [question, setQuestion] = useState('')

  const submitHandler = event => {
    event.preventDefault();
    props.onAddTask({title: question})
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
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
            <button type="submit">Add</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default TodoForm;
