import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Unmount from './Unmount';

describe('Unmount', () => {
  it('should set click listener on document on mount', async () => {
    window.alert = jest.fn();
    render(<Unmount />);
    fireEvent.click(document);
    expect(window.alert).toHaveBeenCalledWith('Playground');
  });

  it('should remove click listener from document on unmount', () => {
    window.alert = jest.fn();
    const { unmount } = render(<Unmount />);
    unmount();
    fireEvent.click(document);
    expect(window.alert).not.toHaveBeenCalled();
  });
});
