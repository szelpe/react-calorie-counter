import React from 'react';
import FoodTable from "../../../shared/FoodTable";

function MainFoodTable(props) {
    return (
        <div className="main-food-table">
            <FoodTable {...props} />
        </div>
    );
}

export default MainFoodTable;