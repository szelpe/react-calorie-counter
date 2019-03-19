import * as ActionTypes from './ActionTypes';

function getDefaultState() {
    return {
        foods: []
    };
}

export default function(state, action) {
    if (state == null) {
        return getDefaultState()
    }

    switch (action.type) {
        case ActionTypes.ADD_FOOD:
            let food = action.payload;

            return {
                foods: [ ...state.foods, food ]
            };

        case ActionTypes.FOODS_LOADED:
            let foods = action.payload;
            return {
                foods
            };

        case ActionTypes.RESET:
            return getDefaultState();

        default:
            return state;
    }
}
