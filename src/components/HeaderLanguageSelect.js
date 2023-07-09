import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
const langs = {
    en: 'English',
    ru: 'Русский'
}

// update your language in your component
class HeaderLanguageSelect extends Component {

    updateLanguage = (lang) => {
        this.props.i18n.changeLanguage(lang);
    }

    render() {
        return (
            <>
                {
                    Object.keys(langs).map((lang) => (
                        <li>
                            <button link type='submit' key={lang} onClick={() => this.props.i18n.changeLanguage(lang)} disabled={this.props.i18n.resolvedLanguage === lang} style={{ backgroundColor: 'transparent' }} >
                                {langs[lang]}
                            </button>
                        </li>
                    ))
                }
            </>
        )
    }
}

// export default your component run through withTranslation imported above
export default withTranslation()(HeaderLanguageSelect)