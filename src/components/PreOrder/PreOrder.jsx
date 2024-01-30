import  {useState} from "react"
import { Modal,Button,Row,Container,Col } from 'react-bootstrap' 
import "../PreOrder/preOrder.css"
import owl from "../PreOrder/Image/owlImage.svg"



function PreOrder(props) {
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);


 const handleCloseFirstModal = () => setShowFirstModal(false);
  const handleShowSecondModal = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
    setShowFirstModal(true);
  };

  const handleShowThirdModal = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };

  const handleCloseThirdModal = () => {
    setShowThirdModal(false);
    // Additional actions or state updates can be performed here.
    setShowFirstModal(true);
  };
  return (
    
    <div className=''>

      {
        showFirstModal && (
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
          <button onClick={props.onHide} className="footer-btn">
              Cancel
            </button>
            <button onClick={handleShowSecondModal} className="footer-btn">
              Proceed
            </button>
          </Modal.Footer>
        </Modal>
        )
      }
   

{
  showSecondModal && (
    <Modal  show={showSecondModal} onHide={handleCloseSecondModal} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton className='head'>
      <Modal.Title id="contained-modal-title-vcenter">
      Order Summary
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="grid-example">
      <Container>
        <Row>
          <Col md={6}>
            <div className="imag-Box">
              <img src={owl} alt="image"/>
            </div>
          </Col>
          <Col md={6} me-5>
            <div className="text-Box">
              <p className="gap-3 ">Product name<span className="ml-5">Owl art</span></p>
              <p></p>
              <p>Quantity</p>
              <p>2</p>
              <p>Product size</p>
              <p>Medium</p>
              <p>Duration</p>
              <p>5 days-10 days</p>
              <p>Price </p>
              <p>$500</p>
              <p>Delivery fee</p>
              <p>$500</p>
            </div>
          </Col>

          {/* <Col xs={12} md={8}>
            .col-xs-12 .col-md-8
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col> */}
        </Row>

        <Row>
          {/* <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col> */}
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
    <Button onClick={handleShowThirdModal}>Next</Button>
            <Button onClick={handleCloseSecondModal}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

{
  showThirdModal &&(
    <Modal  show={showThirdModal} onHide={handleCloseThirdModal}  aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Using Grid in Modal
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="grid-example">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            .col-xs-12 .col-md-8
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button  onClick={handleCloseThirdModal}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}
   

    </div>
  )
}

export default PreOrder