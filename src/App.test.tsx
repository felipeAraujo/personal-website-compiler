import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render noscript element', () => {
  render(<App />);

  const linkElement = screen.getByText(/You need to enable JavaScript to run this app\./i);

  expect(linkElement).toBeInTheDocument();
});
