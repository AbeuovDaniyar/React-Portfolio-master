import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Porfolio extends Component {
  render() {
    let portfolio = this.props.t('portfolio', { returnObjects: true });
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>{this.props.t('projectstitle')}</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                portfolio.map((item) => {
                  return (
                    <a href={item.link} target="_blank">
                      <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <img src={`${item.imgurl}`} className="item-img" />
                            <div className="overlay">
                              <div className="portfolio-item-meta">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                              </div>
                            </div>
                        </div>
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Porfolio);