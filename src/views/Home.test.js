import React from 'react'
import { render } from '@testing-library/react';
import Router from '../router';
import Home from './Home';

describe('Home', () => {
  it('should contain five links', () => {
    window.alert = jest.fn();
    const { getByText } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByText('Binding')).toBeInTheDocument();
    expect(getByText('Conditionals')).toBeInTheDocument();
    expect(getByText('Repetitions')).toBeInTheDocument();
    expect(getByText('Mount')).toBeInTheDocument();
    expect(getByText('Unmount')).toBeInTheDocument();
  });
});
