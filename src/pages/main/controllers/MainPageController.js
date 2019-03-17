import React, {Component} from 'react';
import FoodService from "../../../services/FoodService";

export default function MainPageController(MainPage) {
    return class extends Component {
        static displayName = `MainPageController(${MainPage.name})`;

        state = {
            foodsForToday: []
        };

        componentDidMount() {
            FoodService.get()
                .then(foods => this.setState({
                    foodsForToday: foods
                }));
        }

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
