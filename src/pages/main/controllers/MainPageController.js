import React, {Component} from 'react';
import FoodService from "../../../services/FoodService";
import I18nContext from "../../../context/I18nContext";

export default function MainPageController(MainPage) {
    return class extends Component {
        static displayName = `MainPageController(${MainPage.name})`;
        static contextType = I18nContext;

        state = {
            foodsForToday: []
        };

        componentDidMount() {
            let i18n = this.context;
            let text = i18n.t('');

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
