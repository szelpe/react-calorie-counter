import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { loadI18n } from "./utils/i18n";

loadI18n()
    .then(i18n => {
        ReactDOM.render(<App i18n={i18n} />, document.getElementById('root'));
    });

serviceWorker.unregister();
