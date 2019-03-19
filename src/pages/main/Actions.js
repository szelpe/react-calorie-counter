import * as ActionTypes from './ActionTypes'
import FoodService from "../../services/FoodService";


export function addFood(food) {
    return {
        type: ActionTypes.ADD_FOOD,
        payload: food
    }
}

export function foodsLoaded(foods) {
    return {
        type: ActionTypes.FOODS_LOADED,
        payload: foods
    }
}

export function foodsLoading(foods) {
    return {
        type: ActionTypes.FOODS_LOADING
    }
}

export function loadFoodsAsync() {
    return dispatch => {
        dispatch(foodsLoading());
        return FoodService.get()
            .then(foods => dispatch(foodsLoaded(foods)));
    }
}


export function addFoodAsync(food) {
    return dispatch => {
        return {
            type: ActionTypes.ADD_FOOD,
            payload: food
        }
    }
}

