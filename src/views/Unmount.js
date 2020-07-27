import React, { useEffect } from 'react';

const Unmount = () => {
  const alertPageHeading = () => {
    window.alert(getPageHeading());
  };

  function getPageHeading(){
    const heading = document.querySelector('h1');
    return heading && heading.textContent;
  }

  useEffect(() => {
    document.addEventListener('click', alertPageHeading);

    return () => {
      document.removeEventListener('click', alertPageHeading);
    }
  });

  return (
    <div className="playground-preview-container">
      <h1>Playground</h1>
    </div>
  );
}

export default Unmount;
