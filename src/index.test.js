import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { init } from './'

jest.mock('react-dom');

describe('Index', () => {
  beforeEach(() => {
    const container = document.createElement('div');
    container.setAttribute('data-app', '');
    document.body.appendChild(container);
  });

  afterEach(() => {
    getContainerElement().remove();
  });

  function getContainerElement(){
    return document.querySelector('[data-app]');
  }

  it('should initialize application', async () => {
    const container = getContainerElement();
    ReactDOM.render = jest.fn();
    init();
    expect(ReactDOM.render).toHaveBeenCalledWith(<Router />, container);
  });
});
