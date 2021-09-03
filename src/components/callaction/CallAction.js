import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class CallAction
**/

class CallAction extends Component {
 state = {}
 render() {
  return(
   <div>
          {/* <!-- Call to action section--> */}
          <section className="cta">
              <div className="cta-content">
                  <div className="container px-5">
                      <h2 className="text-white display-1 lh-1 mb-4">
                          Stop waiting.
                          <br />
                          Start building.
                      </h2>
                      <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="https://startbootstrap.com/theme/new-age" target="_blank">Download for free</a>
                  </div>
              </div>
          </section>
   </div>
    )
   }
 }


CallAction.propTypes = {}
export default CallAction