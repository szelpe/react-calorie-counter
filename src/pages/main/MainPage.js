import React, { useContext } from 'react';
import MainFoodForm from "./components/MainFoodForm";

import './MainPage.css'
import MainFoodTable from "./components/MainFoodTable";
import I18nContext from "../../context/I18nContext";

function MainPage(props) {
    let i18n = useContext(I18nContext);

    return (
        <div>
            <MainFoodForm
                onSubmit={props.onFoodFormSubmit}
                onFieldChange={props.onFoodFormFieldChange}
                onFieldBlur={props.onFoodFormFieldBlur}
                values={props.foodFormValues}
                errors={props.foodFormErrors}
            />

            <h2>{i18n.t('MainPage.TodayCaloriesTitle')}</h2>
            <MainFoodTable foods={props.foodsForToday} />
        </div>
    );
}

export default MainPage;