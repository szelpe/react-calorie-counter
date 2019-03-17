import React, {Component} from 'react';

export default function MainPageController(MainPage) {
    return class extends Component {
        static displayName = `MainPageController(${MainPage.name})`;

        state = {
            foodsForToday: []
        };

        handleFoodFormSubmit = (formFieldValues) => {
            this.setState(state => {
                return {
                    foodsForToday: [...state.foodsForToday, formFieldValues]
                };
            });
        };

        render() {
            return <MainPage
                onFoodFormSubmit={this.handleFoodFormSubmit}
                foodsForToday={this.state.foodsForToday}
                {...this.props}
            />;
        }
    }
}
