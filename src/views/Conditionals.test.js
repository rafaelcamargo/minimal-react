import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import Conditionals from './Conditionals';

describe('Conditionals', () => {
  it('should render the entered name on input blur', async () => {
    const { container, getByText } = render(<Conditionals />);
    const evtMock = {
      target: {
        value: 'Rafael'
      }
    };
    const input = container.querySelector('input');
    fireEvent.blur(input, evtMock);
    await waitFor(() => {
      expect(getByText('Hello Rafael!')).toBeInTheDocument();
    })
  });

  it('should not render a name if no name has been entered', async () => {
    const { container, getByText } = render(<Conditionals />);
    const evtMock = {
      target: {
        value: ''
      }
    };
    const input = container.querySelector('input');
    fireEvent.blur(input, evtMock);
    await waitFor(() => {
      const nameContainer = container.querySelector('p');
      expect(nameContainer).toEqual(null);
    })
  });
});
