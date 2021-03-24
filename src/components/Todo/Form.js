import React, { useState } from 'react';

import './Form.css';
import Card from '../UI/Card';

const Form = React.memo(props => {

  const submitHandler = event => {
    event.preventDefault();
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
              // value = {question} 
              // onChange = {event => setQuestion(event.target.value)}
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

export default Form;
