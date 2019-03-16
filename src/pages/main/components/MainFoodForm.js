import React from 'react';
import FoodForm from "../../../shared/forms/FoodForm";

function MainFoodForm(props) {
    return (
        <div className="main-food-form card">
            <div className="card-header">Add Food</div>
            <div className="card-body">
                <FoodForm {...props} />
            </div>
        </div>
    );
}

export default MainFoodForm;
