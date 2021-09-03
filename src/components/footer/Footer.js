import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


/**
* @author
* @function Footer
**/

export const Footer = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return(
    <div>
          
              {/* <!-- Footer--> */}
              <footer className="bg-black text-center py-5">
                  <div className="container px-5">
                      <div className="text-white-50 small">
                          <div className="mb-2">&copy; Your Website 2021. All Rights Reserved.</div>
                          <a href="#!">Privacy</a>
                          <span className="mx-1">&middot;</span>
                          <a href="#!">Terms</a>
                          <span className="mx-1">&middot;</span>
                          <a href="#!">FAQ</a>
                      </div>
                      <Button variant="primary" onClick={handleShow}>
                          Launch demo modal
                      </Button>

                  </div>
              </footer>
              {/* <!-- Feedback Modal--> */}
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                          Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                          Save Changes
                      </Button>
                  </Modal.Footer>
              </Modal>
        
    </div>
   )

 }