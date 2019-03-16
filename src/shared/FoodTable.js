import React from 'react';

function FoodTable(props) {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <td colSpan="2">{props.i18n.t('FoodTable.Sum', { Sum: sumOfCalories(props.foods) })}</td>
                </tr>
                <tr>
                    <th>{props.i18n.t('FoodTable.Food')}</th>
                    <th>{props.i18n.t('FoodTable.Calories')}</th>
                </tr>
                </thead>
                <tbody>
                {props.foods.map((food, i) => <FoodLine key={i} food={food}/>)}
                </tbody>
            </table>
        </div>
    );
}

function sumOfCalories(foods) {
    return foods
        .map(f => f.calorieAmount)
        .sum();
}

function FoodLine(props) {
    return <tr>
        <td>{props.food.foodName}</td>
        <td>{props.food.calorieAmount}</td>
    </tr>;
}

export default FoodTable;