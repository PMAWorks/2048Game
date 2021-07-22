import { render, screen } from '@testing-library/react';
import App from './App';

test('How many 2 elements in GameField', () => {
  render(<App></App>)
  var element = screen.getByTestId('GameField')
  expect(element).toBeInTheDocument()
});
