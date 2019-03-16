import React, {Component} from 'react';
import './utils/ArrayExtensions'

import MainPage from "./pages/main";

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import LanguageChanger from "./shared/LanguageChanger";
import I18nContext from './context/I18nContext'


class App extends Component {
    state = {
        language: 'en-US'
    };

    render() {
        return (
            <div className="container">
                <I18nContext.Provider value={this.props.i18n}>

                    <LanguageChanger language={this.state.language} onChange={lang => this.handleLanguageChange(lang)}/>
                    <h1>{this.props.i18n.t('Title')}</h1>
                    <MainPage/>
                </I18nContext.Provider>
            </div>
        );
    }

    componentDidMount() {
        this.setState((state, props) => {
            return {
                language: props.i18n.language
            }
        });
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
