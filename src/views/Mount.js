import React, { useEffect } from 'react';

const Mount = () => {
  const alertPageHeading = () => {
    const heading = document.querySelector('h1');
    return heading ? window.alert(heading.textContent) : window.alert('No heading found!');
  }

  // At this moment, component is not fully built.
  alertPageHeading();

  useEffect(() => {
    // Here you can run tasks that depend on
    // component's markup, for example.
    alertPageHeading();
  }, []);

  return (
    <h1>Mount</h1>
  );
}

export default Mount;
