import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Repetitions from './Repetitions';

describe('Repetitions', () => {
  it('should initialize with two fruits', () => {
    const { getByText } = render(<Repetitions />);
    expect(getByText('Banana')).toBeInTheDocument();
    expect(getByText('Orange')).toBeInTheDocument();
  });

  it('should add a new fruit', async () => {
    const { container, getByText } = render(<Repetitions />);
    const form = container.querySelector('form');
    const input = container.querySelector('input');
    await userEvent.type(input, 'Cherry')
    fireEvent.submit(form);
    await waitFor(() => {
      expect(getByText('Cherry')).toBeInTheDocument();
      expect(input.value).toEqual('');
    })
  });

  it('should not add a fruit on form submit if no fruit has been entered', async () => {
    const { container, getByText } = render(<Repetitions />);
    const form = container.querySelector('form');
    const input = container.querySelector('input');
    const items = container.querySelectorAll('li');
    await userEvent.type(input, '')
    fireEvent.submit(form);
    await waitFor(() => {
      expect(items.length).toEqual(2);
    })
  });
});
