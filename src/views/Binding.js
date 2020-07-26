import React, { useState } from 'react';

const Binding = () => {
  const [name, setName] = useState();

  const onNameChange = evt => {
    setName(evt.currentTarget.value);
  };

  return (
    <div>
      <label>
        Name
      </label>
      <div>
        <input type="text" onChange={ onNameChange }/>
      </div>
      <div>
        Name: { name }
      </div>
    </div>
  );
}

export default Binding;
