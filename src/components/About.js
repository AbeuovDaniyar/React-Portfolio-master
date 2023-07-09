import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="https://avatars.githubusercontent.com/u/70968370?v=4" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>{this.props.t('aboutmetitle')}</h2>
                  <p>
                     {this.props.t('aboutme')}
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>{this.props.t('contactdetailstitle')}</h2>
                        <p className="address">
                           <span>{this.props.t('name')}</span>
                           <br></br>
                           <span>
                              {this.props.t('address')}
                           </span>
                           <br></br>
                           <span>{this.props.t('website')}</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default withTranslation()(About);