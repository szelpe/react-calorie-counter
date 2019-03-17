import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function delay(ms) {
  return new Promise((resolve) => { setTimeout(resolve, ms) });
}

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App i18n={{t: () => 'test'}}/>, div);

  expect(div.textContent.includes('test')).toBe(true);

  ReactDOM.unmountComponentAtNode(div);
});
