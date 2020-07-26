import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

export const init = () => {
  ReactDOM.render(<Router />, document.querySelector('[data-app]'));
}

init();
