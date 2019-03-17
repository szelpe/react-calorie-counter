import React from 'react';

import {range, required} from "../../../shared/validators";
import Validate from "../../../utils/Validate";

function MainFoodFormController(Form) {
    return class extends React.Component {
        static displayName = `MainFoodFormController(${Form.name})`;

        defaultFormValues = {
            foodName: '',
            calorieAmount: ''
        };

        state = {
            formFieldValues: {
                ...this.defaultFormValues
            },
            formFieldErrors: {
                foodName: [''],
                calorieAmount: ['']
            }
        };

        validators = {
            foodName: [required()],
            calorieAmount: [required(), range(null, 0, 10000)]
        };

        validate = Validate(this.validators);

        handleFoodFormSubmit = () => {
            if (!this.isFormValid()) {
                return;
            }

            this.props.onSubmit(this.state.formFieldValues);

            this.setState(state => {
                return {
                    formFieldValues: {...this.defaultFormValues}
                };
            });
        };

        isFormValid() {
            let result = this.validate.form(this.state.formFieldValues);

            result.errors.forEach(field => this.setErrorMessage(field, field.result));

            return result.isValid;
        }

        handleFoodFormFieldBlur = (field) => {
            this.validateField(field);
        };

        handleFoodFormFieldChange = (field) => {
            this.setState(state => {
                return {
                    formFieldValues: {
                        ...state.formFieldValues,
                        [field.name]: field.value
                    }
                };
            });

            this.validateField(field);
        };

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

        render() {
            let { onSubmit, ...restProps } = this.props;

            return <Form
                values={this.state.formFieldValues}
                errors={this.state.formFieldErrors}
                onSubmit={this.handleFoodFormSubmit}
                onFieldChange={this.handleFoodFormFieldChange}
                onFieldBlur={this.handleFoodFormFieldBlur}
                {...restProps}
            />;
        }
    }
}

export default MainFoodFormController;