import React from 'react';
import MainFoodForm from "./components/MainFoodForm";

import './MainPage.css'
import MainFoodTable from "./components/MainFoodTable";

function MainPage(props) {
    return (
        <div>
            <MainFoodForm
                onSubmit={props.onFoodFormSubmit}
                onFieldChange={props.onFoodFormFieldChange}
                onFieldBlur={props.onFoodFormFieldBlur}
                values={props.foodFormValues}
                errors={props.foodFormErrors}
            />

            <h2>Today's foods so far</h2>
            <MainFoodTable foods={props.foodsForToday}/>
        </div>
    );
}

export default MainPage;