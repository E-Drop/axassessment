import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

test('renders App Title', () => {
  const { getByText } = render(<Title />);
  const linkElement = getByText(/Welcome to Gnome App/i);
  expect(linkElement).toBeInTheDocument();
});
