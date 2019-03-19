import React, {Component} from 'react';
import FoodService from "../../../services/FoodService";
import {connect} from 'react-redux';
import {addFood, foodsLoaded, loadFoodsAsync} from '../Actions';

export default function MainPageController(MainPage) {
    class WrappedComponent extends Component {
        static displayName = `MainPageController(${MainPage.name})`;

        // state = {
        //     foodsForToday: []
        // };

        componentDidMount() {
            // FoodService.get()
            //     .then(foods => this.props.dispatch(foodsLoaded(foods)));

            this.props.loadFoodsAsync();
        }

        handleFoodFormSubmit = (formFieldValues) => {
            this.props.addFood(formFieldValues);

            // this.setState(state => {
            //     return {
            //         foodsForToday: [...state.foodsForToday, formFieldValues]
            //     };
            // });
        };

        render() {
            return <MainPage
                onFoodFormSubmit={this.handleFoodFormSubmit}
                foodsForToday={this.props.foods}
                {...this.props}
            />;
        }
    }

    // Redux state
    function mapStateToProps(state) {
        return {
            foods: state.main.foods
        }
    }

    let mapDispatchToProps = {
        addFood,
        loadFoodsAsync
    };

    return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}

