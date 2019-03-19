import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {loadI18n} from "./utils/i18n";
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

loadI18n()
    .then(i18n => {
        ReactDOM.render(
            <Provider store={store}>
                <App i18n={i18n}/>
            </Provider>
            , document.getElementById('root'));
    });

serviceWorker.unregister();
