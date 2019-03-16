import React from 'react'
import InputField from "./fields/InputField";
import Button from "./fields/Button";


export default function FoodForm(props) {
    return (
        <form onSubmit={handleSubmit}>
            <InputField
                labelText={'Food'}
                id="foodName"
                value={props.values.foodName}
                error={props.errors.foodName}
                onChange={props.onFieldChange}
                onBlur={props.onFieldBlur}
            />

            <InputField
                labelText={'Calories'}
                type="number"
                id="calorieAmount"
                value={props.values.calorieAmount}
                error={props.errors.calorieAmount}
                onChange={props.onFieldChange}
                onBlur={props.onFieldBlur}
            />

            <Button type="submit">Add</Button>
        </form>
    );

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit();
    }
}
