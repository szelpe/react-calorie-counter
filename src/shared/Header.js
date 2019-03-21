import React, { useContext } from 'react';
import LanguageChanger from "./LanguageChanger";
import I18nContext from "../context/I18nContext";

export default function Header(props) {
    let { i18n } = useContext(I18nContext);

    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">{i18n.t('Title')}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <LanguageChanger language={props.language} onChange={props.onLanguageChange} className="my-2 my-lg-0" />
            </div>
        </nav>
    </div>
};