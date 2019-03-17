import React from 'react';
import {mount, shallow} from 'enzyme';
import FoodForm from "../FoodForm";
import InputField from "../fields/InputField";
import Button from "../fields/Button";

let i18n = {
    t: jest.fn(() => 'i18n test')
};

afterEach(() => {
    expect(i18n.t).toHaveBeenCalled();
});

test('renders correctly', () => {
    let wrapper = shallow(<FoodForm
        i18n={i18n}
        values={{
            foodName: 'test food',
            calorieAmount: '123'
        }}
        errors={{}}
    />);

    console.log(wrapper.debug());

    expect(wrapper.exists('Button')).toBe(true);
    expect(wrapper).toContainMatchingElement(Button);
    expect(wrapper.find(Button).childAt(0).text()).toBe('i18n test');

    let buttonWrapper = wrapper.find(Button).shallow();
    
    console.log(buttonWrapper.debug());

    expect(buttonWrapper.find('button')).toHaveClassName('btn');
});
