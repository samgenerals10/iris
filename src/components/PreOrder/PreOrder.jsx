import React from 'react'
import { Modal,Button } from 'react-bootstrap' 
import "../PreOrder/preOrder.css"



function PreOrder(props) {
  return (
    
    <div className=''>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='head'>
        <Modal.Title   id="contained-modal-title-vcenter">
        Pre-Order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='pre-text'>
        Secure your bespoke Irin masterpiece by providing your personal details.
        </p>
        <p className='personal-box'>Personal Details</p>
        <form>
        <div className='row'>
          <div className='col-4'>
          <label for="inputEmail4">Fullname<span style={{ color: "red" }}>*</span></label>
          <input type="email" class="form-control" id="inputEmail4"/>
          </div>
          <div className='col-4'>
          <label for="inputEmail4">Email<span style={{ color: "red" }}>*</span></label>
          <input type="email" class="form-control" id="inputEmail4"/>
          </div>
          <div className='col-4'>
          <label for="inputEmail4">Recipient’s phone number<span style={{ color: "red" }}>*</span></label>
          <input type="email" class="form-control" id="inputEmail4"/>
          </div>
        </div>
        </form>
        <form className='mt-4'>
          <div className='row'>
            <div className='col-6'>
            <label for="inputEmail4">Fullname<span style={{ color: "red" }}>*</span></label>
          <input type="email" class="form-control" id="inputEmail4"/>
            </div>
            <div className='col-6'>
            <label for="inputEmail4">Fullname<span style={{ color: "red" }}>*</span></label>
          <input type="email" class="form-control" id="inputEmail4"/>
            </div>
          </div>
        </form>
     <div className='mt-5'>
     <p className='personal-box'>Product Details</p>
     <from>
      <div className='row'>
      <form>
        <div className='row'>
          <div className='col-3'>
          <label for="inputEmail4">Product name<span style={{ color: "red" }}>*</span></label>
          <input type="email" class="form-control" id="inputEmail4"/>
          </div>
          <div className='col-4'>
          <label for="inputEmail4">Number of Products<span style={{ color: "red" }}>*</span></label>
          <input type="email" class="form-control" id="inputEmail4"/>
          </div>
          <div className='col-5'>
          <label for="inputEmail4">Product size based on categories<span style={{ color: "red" }}>*</span></label>
          <input type="email" class="form-control" id="inputEmail4"/>
          </div>
          <div className='col-12 mt-3'>
          <label for="exampleFormControlTextarea1" class="form-label">Customization(based on individual)<span style={{ color: "red" }}>*</span></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
        </form>
      </div>
     </from>
     </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide} className='footer-btn'>Cancel</button>
        <button className='footer-btn'>Proceed</button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default PreOrder