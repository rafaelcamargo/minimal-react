import React from 'react'
import { render } from '@testing-library/react';
import Mount from './Mount';

describe('Mount', () => {
  it('should alert page heading once', () => {
    window.alert = jest.fn();
    render(<Mount />);
    expect(window.alert).toHaveBeenCalledWith('No heading found!');
    expect(window.alert).toHaveBeenCalledWith('Mount');
    expect(window.alert).toHaveBeenCalledTimes(2);
  });
});
