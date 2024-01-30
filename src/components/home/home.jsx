import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firstRowImg from "./homeImages/Rectangle 56.png";
import secondRowImage1 from "./homeImages/Rectangle 44.png";
import secondRowImage2 from "./homeImages/Rectangle 45.png";
import homeThirdRomImage1 from "./homeImages/Rectangle 14.png";
import homeThirdRomImage2 from "./homeImages/Rectangle 43.png";
import homeThirdRomImage3 from "./homeImages/Rectangle 46.png";
import homeThirdRomImage4 from "./homeImages/Rectangle 47.png";
import homeFithRowFirstImage from "./homeImages/shinningImage.png";
import homeFithRowSecondImage from "./homeImages/metalstool.png";
import homeFithRowThirdImage from "./homeImages/homechair.png";
import homeSixthRowFirstImage from "./homeImages/Rectangle 53.png";
import homeSixthRowSecondImage from "./homeImages/Rectangle 54.png";
import RectangaleIconYellow from "./homeImages/RectangleIconYellow 45.png";
import RectangaleIconGreen from "./homeImages/RectangleIconGreen 46.png";
import homeSeventhRowSecondImage from "./homeImages/Rectangle 44 2.png";
import homeNinthRowFirstImage from "./homeImages/Rectangle 25.png"

function Home() {
  return (
    <div >
      <Container fluid className="home-mainbox">
        {/*First Row Text Title and Image*/}
        <Row className="home-first-row" style={{}}>
          <Col className="home-first-row-col1" xs={12} md={6}  style={{}}>
            <h1 className="home-first-row-col-h1" style={{}}>
              Indulge in the Art of Reinvention. Redefining Elegance with a
              Touch  <br /> of <span style={{color:"#5F6F52"}}>Metallic Mastery.</span>
            </h1>
            <p>
              At Irin, we tackle the challenge of revitalizing both and new
              forgotten <br />metals, crafting each piece with a blend of artistic
              innovation and <br /> sustainable practices.
            </p>
            <div className="home-first-row-col1-botton-box" style={{}}>
              <div className="home-first-row-col1-botton-box-text" style={{}}>
                Pre-order now
              </div>
            </div>
          </Col>
          <Col className="home-first-row-col2" xs={12} md={6}style={{}}>
            <img className="home-first-row-col2-image"style={{}} src={firstRowImg} alt="firstRowImg"/>
          </Col>
        </Row>

        {/*Second Row Two Images */}
        <Row>
          <Col className="home-second-row-col1" xs={12} md={6}>
            <img className="home-second-row-col1-image1 img-fluid" style={{}} src={secondRowImage1} alt="secondRowImage1"/>
          </Col>
          <Col xs={12} md={6}>
            <img className="home-second-row-col2-image2 img-fluid" style={{ }} src={secondRowImage2} alt="secondRowImage2"/>
          </Col>
        </Row>

        {/*Third Row Spotlight Section with four Images */}

        <Row className="home-third-row" style={{}}>
          <div className="home-third-row-title-spotlight" style={{}}>
            Spotlight
          </div>
          <Col className="home-third-row-col1-spotlight" style={{}}>
            <img className="home-third-row-col1-spotlight-image1" style={{}} src={homeThirdRomImage1} alt="homeThirdRomImage1"/>
            <div className="home-third-row-col1-details"style={{}}>
              Upcycled Metal Table
            </div>
            <div className="home-third-row-col1-details-price" style={{}}>
              $500.00
            </div>
          </Col>

          <Col className="home-third-row-col2-spotlight" style={{}}>
            <img className="home-third-row-col2-image2"  style={{}} src={homeThirdRomImage2} alt="homeThirdRomImage2"/>
            <div className="home-third-row-col2-details" style={{}}>
              Upcycled Metal Table
            </div>
            <div className="home-third-row-col2-details-price" style={{}}>
              $500.00
            </div>
          </Col>
          <Col className="home-third-row-col3-spotlight" style={{}}>
            <img className="home-third-row-col3-spotlight-image3"
              style={{}} src={homeThirdRomImage3} alt="homeThirdRomImage3"/>
            <div className="home-third-row-col3-details" style={{}}>
              Upcycled Metal Table
            </div>
            <div className="home-third-row-col3-details-price" style={{}}>
              $500.00
            </div>
          </Col>
          <Col className="home-third-row-col4-spotlight" style={{}}>
            <img className="home-third-row-col4-spotlight-image4"
              style={{}} src={homeThirdRomImage4} alt="homeThirdRomImage4"/>
            <div className="home-third-row-col4-details" style={{}}>
              Upcycled Metal Table
            </div>
            <div className="home-third-row-col4-details-price" style={{}}>
              $500.00
            </div>
          </Col>
        </Row>

        {/*Fourth Row "Why choose Us" Section with three coloms */}
        <div className="home-fourth-row-box" style={{}}>
          <div className="home-fourth-row-title-whyChooseUs" style={{}}>
            Why Choose Us
          </div>
          <div className="home-fourth-text" style={{}}>
            Choose Irin for a harmonious blend of artistic innovation,
            sustainable luxury, and unparalleled craftsmanship in every bespoke
            creation.
          </div>
          <Row className="home-fourth-row" style={{}}>
            <Col className="home-fourth-row-col1" xs={12} md={4} style={{}}>
              <div className="home-fourth-row-col1-firstBox" style={{}}>
                <div className="home-fourth-row-col1-secondBox" style={{}}>
                  <div className="home-fourth-row-col1-title" style={{}}>
                    Sustainability at Heart
                  </div>
                  We are founded on the principles of sustainability. By
                  upcycling metal, we not only reduce environmental impact but
                  also contribute to a circular economy.
                </div>
              </div>
            </Col>
            <Col className="home-fourth-row-col2" xs={12} md={4}>
              <div className="home-fourth-row-col2-firstBox" style={{}}>
                <div className="home-fourth-row-col2-secondBox" style={{}}>
                  <div className="home-fourth-row-col2-title" style={{}}>
                    Artistic Innovation
                  </div>
                  Our creations are more than just products; they are a
                  testament to our commitment to artistic innovation. Every
                  piece tells a unique story of transformation and
                  craftsmanship.
                </div>
              </div>
            </Col>
            <Col className="home-fourth-row-col3" xs={12} md={4}>
              <div className="home-fourth-row-col3-firstBox" style={{}}>
                <div className="home-fourth-row-col3-secondBox" style={{}}>
                  <div className="home-fourth-row-col3-title" style={{}}>
                    Beauty in the Unseen
                  </div>
                  At Irin, we possess a unique perspective. We see the beauty in
                  the overlooked, the elegance in the discarded. This ability to
                  find art in the unexpected defines our creative approach.
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Fith Row New Arrival section*/}

        <div className="home-fith-row-title-newArrival" style={{}}>
          New Arrivals
        </div>
        <Row className="home-fifth-row-row" style={{}}>
          <Col className="home-fifth-row-row-col1" xs={12} md={4} style={{}}>
            <img className="home-fifth-row-row-col1-image1" style={{}}src={homeFithRowFirstImage} alt="homeFithRowFirstImage"/>
            <div className="home-fifth-row-row-col1-image1-details" style={{}}>
              Upcycled Metal Table
            </div>
            <div className="home-fifth-row-row-col1-image1-details-price" style={{}}>
              $500.00
            </div>
          </Col>
          <Col className="home-fifth-row-row-col2" xs={12} md={4} style={{}}>
            <img className="home-fifth-row-row-col2-image2" style={{}} src={homeFithRowSecondImage} alt="homeFithRowSecondImage"/>
            <div className="home-fifth-row-row-col2-image2-details" style={{}}>
              Upcycled Metal Table
            </div>
            <div className="home-fifth-row-row-col2-image2-details-price" style={{}}>
              $500.00
            </div>
          </Col>

          <Col className="home-fifth-row-row-col3" xs={12} md={4} style={{}}>
            <img className="home-fifth-row-row-col3-image3" style={{}} src={homeFithRowThirdImage}alt="homeFithRowThirdImage"/>
            <div className="home-fifth-row-row-col3-image3-details" style={{}}>
              Upcycled Metal Table
            </div>
            <div className="home-fifth-row-row-col3-image3-details-price" style={{}}>
              $500.00
            </div>
          </Col>
        </Row>

        {/* Sixth Row Pre-Order / Customise / Buy Section */}
        <div className="home-sixth-row" style={{}}>
          <div className="home-sixth-row-title-pre-Ordercustomize" style={{}}>
            Pre-order / Customize / Buy
          </div>

          <Row>
            <Col className="home-sixth-row-col1"style={{}}>
              <img className="home-sixth-row-col1-image1" style={{}}src={homeSixthRowFirstImage} alt="homeSixthRowFirstImage"/>
              <div className="home-sixth-row-col1-image1-details" style={{}}>
                Upcycled Metal Table
              </div>
              <div className="home-sixth-row-col1-image1-details-two" style={{}}>
                Pre-order now
              </div>
            </Col>
            <Col className="home-sixth-row-col2" style={{}}>
              <img className="home-sixth-row-col2-image2" style={{}} src={homeSixthRowSecondImage} alt="homeSixthRowSecondImage" />
              <div className="home-sixth-row-col2-image2-details" style={{}}>
                Upcycled Metal Table
              </div>
              <div className="home-sixth-row-col2-image2-details-two" style={{}}>
                Pre-order now
              </div>
            </Col>
          </Row>
        </div>

        {/* Seventh Row Save The Earth Section */}
        <div className="home-seventh-row-main-box" style={{}}>
          <Row>
            <Col className="home-seventh-row-col1" xs={12} md={6} style={{}}>
              <div className="home-seventh-row-col1-title"
                style={{
                  
                }}
              >
                Save The Earth
              </div>
              <div className="home-seventh-row-col1-title-text" style={{}}>
                Irin, inspired by the Yoruba word for metal, embodies
                sustainability and <br /> artistic innovation, transforming both
                new and discarded metallic materials <br /> into bespoke art and
                lifestyle pieces.
              </div>
              <div className="home-seventh-row-col1-title-learnMore" style={{}}>
                Learn more
              </div>
              <div className="home-seventh-row-col1-iconsbox" style={{}}>
                <img className="home-seventh-row-col1-icon1" style={{}} src={RectangaleIconYellow} alt="" />
                <img className="home-seventh-row-col1-icon2" style={{}} src={RectangaleIconGreen} alt="" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img className="home-seventh-row-col2-image" style={{}} src={homeSeventhRowSecondImage} alt="" />
            </Col>
          </Row>
        </div>
        {/*Home Eigth Row Subscribe To Our News Letter */}

        <div className="containerFluid home-eighth-row-newsletter-mainbox" style={{}}>
         
          <div className="home-eighth-row-newsletter-title" style={{}}>
            Subscribe To Our News Letter
            </div>
            <div className="home-eighth-row-newsletter-title-text" style={{}}>
            <p>Be the first to get notify of our new arrivals,Deals and Updates. Don't miss out!!</p>
          </div>
          
          <div className="home-eighth-row-newsletter-form" style={{}}>
          <Form>
            <Row>
              <Col >
                <Form.Control className="home-eighth-row-newsletter-form-box1" placeholder="First name" style={{}}/>
              </Col>
              <Col >
                <Form.Control className="home-eighth-row-newsletter-form-box2" placeholder="Last name" style={{}}/>
              </Col>
              <Col>
                <Form.Control className="home-eighth-row-newsletter-form-box3" placeholder="Email Address" style={{}}/>
              </Col>
              <Col xs="auto">
                <Button type="submit" className="mb-2 home-eighth-row-newsletter-form-button" style={{}}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
          </div>
        </div>


        {/*Ninth Row Join US Section*/}
        <div className="home-ninth-row-mainbox" style={{}} >
            <div className="home-ninth-row-title-JoinUs" style={{}}>Join Us</div>
            <div className="home-ninth-row-title-text" style={{}}>
              "Embark on an exclusive and sustainable 
            journey of creativity and reinvention with Irin, 
            where artistry meets luxury in every meticulously crafted piece.</div>
            <div className="home-ninth-row-box2" style={{}}>
              <Row className="home-ninth-row-box2-row" style={{}}>
                <Col>
                <img className="home-ninth-row-box2-row-col1-image" style={{}} src={homeNinthRowFirstImage} alt="" />
              </Col>
                <Col>
                <div className="home-ninth-row-col2-formbox" style={{}}>
          <Form>
            <Row className="home-ninth-row-col2-formrow" style={{}}>
              <Col>
                <Form.Control className="home-ninth-row-col2-form-box1" placeholder="First name" style={{}}/>
              </Col>
             
              <Col>
                <Form.Control className="home-ninth-row-col2-form-box2" placeholder="Email Address" style={{}}/>
              </Col>
              <Col className="home-ninth-row-col2-form-box3" style={{}} xs="auto">
                <Button className="home-ninth-row-col2-form-box3-button1 mb-2" type="submit" style={{}}>
                  sign Up
                </Button>
                <Button className="home-ninth-row-col2-form-box3-button2 mb-2" type="submit"  style={{}}>
                  login
                </Button>
              </Col>
            </Row>
          </Form>
          </div>
          </Col>
          </Row>
        </div>
        </div>
      </Container>
      
    </div>
  );
}

export default Home;
