import React from 'react';
import FoodForm from "../../../shared/forms/FoodForm";

function MainFoodForm(props) {
    return (
        <div className="main-food-form card">
            <div className="card-header">{props.i18n.t('MainFoodForm.AddFood')}</div>
            <div className="card-body">
                <FoodForm {...props} />
            </div>
        </div>
    );
}

export default MainFoodForm;
