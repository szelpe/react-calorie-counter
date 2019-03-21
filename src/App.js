import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import './utils/ArrayExtensions'
import MainPage from "./pages/main";
import LanguageChanger from "./shared/LanguageChanger";
import I18nContext from './context/I18nContext';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import AboutPage from "./pages/about/AboutPage";
import Header from "./shared/Header";

class App extends Component {
    state = {
        locale: {
            language: 'en-US',
            i18n: {
                t: () => {
                }
            }
        }
    };

    render() {
        return (
            <I18nContext.Provider value={this.state.locale}>
                <Router>
                    <div className="container">
                        <Header language={this.state.locale.language}
                                onLanguageChange={lang => this.handleLanguageChange(lang)}/>

                        <Route path="/" exact component={MainPage} />
                        <Route path="/about" exact component={AboutPage} />

                    </div>
                </Router>
            </I18nContext.Provider>
        );
    }

    componentDidMount() {
        this.setState({
            locale: {
                language: this.props.i18n.language,
                i18n: this.props.i18n
            }
        })
    }

    handleLanguageChange(lang) {
        this.props.i18n.changeLanguage(lang, () => {
            this.setState({
                locale: {
                    language: lang,
                    i18n: this.props.i18n
                }
            });
        });
    }
}

export default App;
