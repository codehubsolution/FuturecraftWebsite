import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


/**
* @author
* @function Header
**/

export const Header = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return(
    <div>
        
          <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
              <div className="container px-5">
                  <a className="navbar-brand fw-bold" href="#page-top">Start Bootstrap</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      Menu
                      <i className="bi-list"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                          <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Home</a></li>
                          <li className="nav-item"><a className="nav-link me-lg-3" href="#features">About</a></li>
                          <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Services</a></li>
                          <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Contact</a></li>                          
                      </ul>
                      <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" onClick={handleShow}>
                          <span className="d-flex align-items-center">
                              <i className="bi-chat-text-fill me-2"></i>
                              <span className="small">Send Feedback</span>
                          </span>
                      </button>
                  </div>
              </div>
          </nav>
    


 {/* <!-- Feedback Modal--> */ }
 
          {/* <div className="modal fade" id="feedbackModal" show={show} onHide={handleClose}> */}
              <Modal show={show} onHide={handleClose} centered>
              <div className="m-0">
                  <div className="modal-content">
                      <div className="modal-header bg-gradient-primary-to-secondary p-4">
                          <h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
                          <button className="btn-close btn-close-white" type="button" onClick={handleClose} aria-label="Close"></button>
                      </div>
                      <div className="modal-body border-0 p-4">
                          {/* <!-- * * * * * * * * * * * * * * *-->
                          <!-- * * SB Forms Contact Form * *-->
                          <!-- * * * * * * * * * * * * * * *-->
                          <!-- This form is pre-integrated with SB Forms.-->
                          <!-- To make this form functional, sign up at-->
                          <!-- https://startbootstrap.com/solution/contact-forms-->
                          <!-- to get an API token!--> */}
                          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                              {/* <!-- Name input--> */}
                              <div className="form-floating mb-3">
                                  <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                  <label for="name">Full name</label>
                                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                              </div>
                              {/* <!-- Email address input--> */}
                              <div className="form-floating mb-3">
                                  <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                  <label for="email">Email address</label>
                                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                              </div>
                              {/* <!-- Phone number input--> */}
                              <div className="form-floating mb-3">
                                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                  <label for="phone">Phone number</label>
                                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                              </div>
                              {/* <!-- Message input--> */}
                              <div className="form-floating mb-3">
                                  <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                  <label for="message">Message</label>
                                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                              </div>
                              {/* <!-- Submit success message-->
                              <!---->
                              <!-- This is what your users will see when the form-->
                              <!-- has successfully submitted--> */}
                              <div className="d-none" id="submitSuccessMessage">
                                  <div className="text-center mb-3">
                                      <div className="fw-bolder">Form submission successful!</div>
                                      To activate this form, sign up at
                                      <br />
                                      <a href="#">https://startbootstrap.com/solution/contact-forms</a>
                                  </div>
                              </div>
                              {/* <!-- Submit error message-->
                              <!---->
                              <!-- This is what your users will see when there is-->
                              <!-- an error submitting the form--> */}
                              <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                              {/* <!-- Submit Button--> */}
                              <div className="d-grid"><button className="btn btn-primary rounded-pill btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                          </form>
                      </div>
                  </div>
              </div>
          </Modal>

         
      </div>
   )

 }