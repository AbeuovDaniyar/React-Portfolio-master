import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                {this.props.t("contactmetitle")}
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {this.props.t("linkedinId")}
                </h4>
                <h4>Email :  
                  {this.props.t("emailId")}
                </h4>
                <h4>Phone :  
                  {this.props.t("phone")}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}

export default withTranslation()(ContactUs);