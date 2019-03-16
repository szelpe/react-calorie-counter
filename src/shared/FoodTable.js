import React, { useContext } from 'react';
import I18nContext from "../context/I18nContext";

function FoodTable(props) {
    let i18n = useContext(I18nContext);
    
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <td colSpan="2">{i18n.t('FoodTable.Sum', { Sum: sumOfCalories(props.foods) })}</td>
                </tr>
                <tr>
                    <th>{i18n.t('FoodTable.Food')}</th>
                    <th>{i18n.t('FoodTable.Calories')}</th>
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