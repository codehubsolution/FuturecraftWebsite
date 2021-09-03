import React, { Component } from 'react'
import PropTypes from 'prop-types'
import googlePlay from '../../assets/img/google-play-badge.svg';
import appStore from '../../assets/img/app-store-badge.svg';

/**
* @author
* @class AppSection
**/

class AppSection extends Component {
 state = {}
 render() {
  return(
   <div>
          {/* <!-- App badge section--> */}
          <section className="bg-gradient-primary-to-secondary" id="download">
              <div className="container px-5">
                  <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
                  <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                      <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src={googlePlay} alt="..." /></a>
                      <a href="#!"><img className="app-badge" src={appStore} alt="..." /></a>
                  </div>
              </div>
          </section>
   </div>
    )
   }
 }


AppSection.propTypes = {}
export default AppSection