import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import HeaderLanguageSelect from './HeaderLanguageSelect';

const langs = {
  en: 'English',
  ru: 'Русский'
}

class Header extends Component {
  render() {
    let socialLinks = this.props.t("socialLinks", { returnObjects: true });
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">{this.props.t("shownavigation")}</a>
            <a className="mobile-btn" href="#" title="Hide navigation">{this.props.t("hidenavigation")}</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">{this.props.t("navhome")}</a></li>
              <li><a className="smoothscroll" href="#about">{this.props.t("navabout")}</a></li>
              <li><a className="smoothscroll" href="#resume">{this.props.t("navresume")}</a></li>
              <li><a className="smoothscroll" href="#portfolio">{this.props.t("navworks")}</a></li>
              <li><a className="smoothscroll" href="#contact">{this.props.t("navcontact")}</a></li>
              <HeaderLanguageSelect />
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{this.props.t("name")}.</h1>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>{this.props.t("role")}.{this.props.t("roleDescription")}
              </h3>
              <hr />
              <ul className="social">
                {
                  socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank"><i className={item.className}></i></a>
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}


export default withTranslation()(Header);