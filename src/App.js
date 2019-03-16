import React, {Component} from 'react';
import './utils/ArrayExtensions'

import MainPage from "./pages/main";

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import LanguageChanger from "./shared/LanguageChanger";


class App extends Component {
    state = {
        language: 'en-US'
    };

    render() {
        return (
            <div className="container">
                <LanguageChanger language={this.state.language} onChange={lang => this.handleLanguageChange(lang)}/>
                <h1>{this.props.i18n.t('Title')}</h1>
                <MainPage i18n={this.props.i18n}/>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            language: this.props.i18n.language
        })
    }

    handleLanguageChange(lang) {
        this.props.i18n.changeLanguage(lang, () => {
            this.setState({
                language: lang
            });
        });
    }
}

export default App;
