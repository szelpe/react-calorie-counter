import React, { useContext } from 'react';
import FoodForm from "../../../shared/forms/FoodForm";
import I18nContext from "../../../context/I18nContext";

function MainFoodForm(props) {
    let i18n = useContext(I18nContext);

    return (
        <div className="main-food-form card">
            <div className="card-header">{i18n.t('MainFoodForm.AddFood')}</div>
            <div className="card-body">
                <FoodForm {...props} />
            </div>
        </div>
    );
}

export default MainFoodForm;
