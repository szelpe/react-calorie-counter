import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

it('renders to DOM without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders without crashing', () => {
  let wrapper = shallow(<App />);
  expect(wrapper.find('h1').contains('Calorie Counter')).toBe(true);
});
