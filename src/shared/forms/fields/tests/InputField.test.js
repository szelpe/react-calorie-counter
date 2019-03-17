import React from 'react'
import { shallow, mount } from 'enzyme'
import InputField from "../InputField";
import renderer from 'react-test-renderer';

test('sets label text', () => {
    let wrapper = shallow(<InputField labelText="test" />);

    expect(wrapper.find('label').text()).toBe('test');
});

test('sets input value', () => {
    let wrapper = shallow(<InputField value="test" />);

    expect(wrapper.find('input').prop('value')).toBe('test');
});

test('shows error', () => {
    let wrapper = shallow(<InputField error="test" />);

    expect(wrapper.find('.text-danger').text()).toBe('test');
});

test('snapshot', () => {
    //let tree = renderer.create(<InputField labelText="test" value="test value"/>).toJSON();
    let tree = mount(<InputField labelText="test" value="test value"/>).getDOMNode();

    expect(tree).toMatchSnapshot();
});