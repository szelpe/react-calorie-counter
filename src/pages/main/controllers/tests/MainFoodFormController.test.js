import React from 'react';
import {shallow} from 'enzyme';
import MainFoodFormController from "../MainFoodFormController";
import Validate from "../../../../utils/Validate";

let validateField = jest.fn();
let validateForm = jest.fn();

jest.mock("../../../../utils/Validate");

Validate.mockImplementation(() => {
    return {
        field: validateField,
        form: validateForm
    };
});

validateField.mockReturnValue({errors: []});
validateForm.mockReturnValue({errors: []});

test('calls validators', () => {
    let MockComponent = jest.fn();
    let ControllerToTest = MainFoodFormController(MockComponent);

    let wrapper = shallow(<ControllerToTest/>);

    let component = wrapper.instance();

    component.handleFoodFormFieldChange({name: 'foodName', value: 'test'});
    expect(validateField).toHaveBeenCalledWith({name: 'foodName', value: 'test'});

    component.handleFoodFormFieldChange({name: 'calorieAmount', value: '123'});
    expect(validateField).toHaveBeenCalledWith({name: 'calorieAmount', value: '123'});

    component.handleFoodFormSubmit();
    expect(validateForm).toHaveBeenCalled();
});

test('sets error properties on change', () => {
    let MockComponent = jest.fn();
    let ControllerToTest = MainFoodFormController(MockComponent);

    let wrapper = shallow(<ControllerToTest/>);

    let component = wrapper.instance();

    validateField.mockReturnValue({errors: ['error message']});
    component.handleFoodFormFieldChange({name: 'foodName', value: ''});

    expect(wrapper).toHaveProp('errors', {foodName: ['error message'], calorieAmount: ['']});

    component.handleFoodFormFieldChange({name: 'calorieAmount', value: '-1'});
    expect(wrapper).toHaveProp('errors', {foodName: ['error message'], calorieAmount: ['error message']});
});

test('sets error properties on submit', () => {
    let MockComponent = jest.fn();
    let ControllerToTest = MainFoodFormController(MockComponent);

    let wrapper = shallow(<ControllerToTest/>);

    let component = wrapper.instance();

    validateForm.mockReturnValue({errors: [{name: 'foodName', result: {errors: ['error message']}}]});

    component.handleFoodFormSubmit();

    expect(wrapper).toHaveProp('errors', {foodName: ['error message'], calorieAmount: ['']});
});
