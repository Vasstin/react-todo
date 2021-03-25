import React, { useState } from 'react';

import './Form.css';
import Card from '../UI/Card';

const Form = React.memo(props => {
  const [question, setQuestion] = useState('')
  
  const submitHandler = event => {
    event.preventDefault();
    props.onSaveTask({title: question})
  };

  console.log(question)

  return (
    <section className="form">
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
          <div className="form__actions">
            <button type="submit">Save</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default Form;
