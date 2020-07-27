import React, { useState } from 'react';

const Repetitions = () => {
  const [fruits, setFruits] = useState(['Banana', 'Orange']);

  const handleFruitSubmission = evt => {
    const input = evt.target.querySelector('[name="fruit"]');
    if(input.value) setFruits([ ...fruits, input.value ]);
    input.value = '';
    evt.preventDefault();
  };

  return (
    <div className="playground-preview-container">
      <div>
        Fruits
      </div>
      <form onSubmit={ handleFruitSubmission }>
        <input type="text" name="fruit" placeholder="Add a fruit..." />
      </form>
      <ul>
        { fruits.map((fruit, index) => <li key={index}>{ fruit }</li>) }
      </ul>
    </div>
  );
}

export default Repetitions;
