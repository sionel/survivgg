import React from 'react';
import ReactDOM from 'react-dom';
import {act, render, screen} from '@testing-library/react';
import App from '../pages/App';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

it('test', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
});
