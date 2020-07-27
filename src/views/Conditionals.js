import React, { useState } from 'react';

const Conditionals = () => {
  const [visitorName, setVisitorName] = useState();

  const handleName = evt => {
    setVisitorName(evt.target.value);
  };

  const buildGreeting = name => {
    if(name) {
      return <p>Hello { name }!</p>;
    }
  };

  return (
    <div className="playground-preview-container">
      <label>
        Name
      </label>
      <div>
        <input type="text" onBlur={ handleName } />
      </div>
      { buildGreeting(visitorName) }
    </div>
  );
}

export default Conditionals;
