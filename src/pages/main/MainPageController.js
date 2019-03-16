import React, {Component} from 'react';

import {required, range} from '../../shared/validators'
import Validate from '../../utils/Validate'
import I18nContext from "../../context/I18nContext";

export default function MainPageController(MainPage) {
    return class extends Component {
        static displayName = `MainPageController(${MainPage.name})`;
        static contextType = I18nContext;

        defaultFormValues = {
            foodName: '',
            calorieAmount: ''
        };

        state = {
            formFieldValues: {
                ...this.defaultFormValues
            },
            formFieldErrors: {
                foodName: '',
                calorieAmount: ''
            },
            foodsForToday: []
        };

        validators = {
            foodName: [required()],
            calorieAmount: [required(), range(null, 0, 10000)]
        };

        validate = Validate(this.validators);

        render() {
            return <MainPage
                foodsForToday={this.state.foodsForToday}
                foodFormValues={this.state.formFieldValues}
                foodFormErrors={this.state.formFieldErrors}
                onFoodFormSubmit={this.handleFoodFormSubmit}
                onFoodFormFieldChange={this.handleFoodFormFieldChange}
                onFoodFormFieldBlur={this.handleFoodFormFieldBlur}
                {...this.props}
            />;
        }

        handleFoodFormSubmit() {
            if (!this.isFormValid()) {
                return;
            }

            this.setState(state => {
                return {
                    foodsForToday: [...state.foodsForToday, state.formFieldValues],
                    formFieldValues: {...this.defaultFormValues}
                };
            });

        }

        isFormValid() {
            let result = this.validate.form(this.state.formFieldValues);

            result.errors.forEach(field => this.setErrorMessage(field, field.result));

            return result.isValid;
        }

        handleFoodFormFieldBlur(field) {
            this.validateField(field);
        }

        handleFoodFormFieldChange(field) {
            this.setState(state => {
                return {
                    formFieldValues: {
                        ...state.formFieldValues,
                        [field.name]: field.value
                    }
                };
            });

            this.validateField(field);
        }

        validateField(field) {
            let result = this.validate.field(field);

            this.setErrorMessage(field, result);
        }

        setErrorMessage(field, result) {
            this.setState(state => {
                return {
                    formFieldErrors: {
                        ...state.formFieldErrors,
                        [field.name]: result.errors
                    }
                };
            });
        }

        handleFoodFormSubmit = this.handleFoodFormSubmit.bind(this);
        handleFoodFormFieldChange = this.handleFoodFormFieldChange.bind(this);
        handleFoodFormFieldBlur = this.handleFoodFormFieldBlur.bind(this);
    }
}
