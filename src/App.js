import React, {Component} from 'react';
import './utils/ArrayExtensions'

import MainPage from "./pages/main";

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Calorie Counter</h1>
                <MainPage/>
            </div>
        );
    }
}

export default App;
