import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Footer extends Component {
  render() {
    let socialLinks = this.props.t("socialLinks", { returnObjects: true });
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}

export default withTranslation()(Footer);