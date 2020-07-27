import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import Binding from './Binding';

describe('Binding', () => {
  it('should render the entered name on input change', async () => {
    const { container, getByText } = render(<Binding />);
    const evtMock = {
      target: {
        value: 'Rafael'
      }
    };
    const input = container.querySelector('input');
    fireEvent.change(input, evtMock);
    await waitFor(() => {
      expect(getByText('Name: Rafael')).toBeInTheDocument();
    })
  });
});
