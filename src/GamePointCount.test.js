import { render, screen } from '@testing-library/react';
import App from './App';

test('How many 2 elements in GameField', () => {
  render(<App></App>)
  var count = 0
  for(let i=0; i<16; i++){
      if(screen.getByTestId(`GamePoint${i}`)){
          count ++
      }
  }
  expect(count).toBe(16)
});
