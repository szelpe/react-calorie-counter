import React from 'react';
import {mount} from 'enzyme';
import MainPage from '../'

let i18n = {
    t: jest.fn()
};

test('should add new food item', () => {
    let wrapper = mount(<MainPage i18n={i18n}/>);

    wrapper.find('input[name="foodName"]').simulate('change', {target: {name: 'foodName', value: 'test'}});
    wrapper.find('input[name="calorieAmount"]').simulate('change', {target: {name: 'calorieAmount', value: '123'}});
    wrapper.find('form').simulate('submit');

    let foodTableWrapper = wrapper.find('[data-test="main-food-table"]');
    expect(foodTableWrapper.text()).toContain('test');
    expect(foodTableWrapper.text()).toContain('123');
});
