import React from "react";
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
      <Container fluid data-bs-spy="scroll">
        {/*First Row Text Title and Image*/}
        <Row style={{ marginTop: "2%", marginBottom: "1%" }}>
          <Col style={{paddingLeft: "7%",marginTop: "2%", }}>
            <h1 style={{fontWeight:"700",marginBottom:"5%",gap: "50"}}>
              Indulge in the Art of Reinvention. Redefining Elegance with a
              Touch  <br /> of <span style={{color:"#5F6F52"}}>Metallic Mastery.</span>
            </h1>
            <p>
              At Irin, we tackle the challenge of revitalizing both and new
              forgotten <br />metals, crafting each piece with a blend of artistic
              innovation and <br /> sustainable practices.
            </p>
            <div
              style={{
                width: "20%",
                fontWeight: "700",
                height: "10%",
                background: "#FEFFFE",
                border: "1px #1D2C0A solid",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  color: "#1D2C0A",
                  fontSize: 16,
                  fontFamily: "Lancelot",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                Pre-order now
              </div>
            </div>
          </Col>
          <Col
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              style={{
                paddingRight: "5%",
                paddingLeft: "10%",
                width: "100%",
                height: "100%",
              }}
              src={firstRowImg}
              alt="firstRowImg"
            />
          </Col>
        </Row>

        {/*Second Row Two Images */}
        <Row>
          <Col>
            <img
              style={{ width: "100%", height: "100%",justifyItems: "stretch",justifySelf: ""}}
              src={secondRowImage1}
              alt="secondRowImage1"
            />
          </Col>
          <Col>
            <img
              style={{ width: "100%", height: "100%" }}
              src={secondRowImage2}
              alt="secondRowImage2"
            />
          </Col>
        </Row>

        {/*Third Row Spotlight Section with four Images */}

        <Row
          style={{
            display: "flex",
            justifyItems: "center",
            placeContent: "center",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <div
            style={{
              color: "#1D2C0A",
              fontSize: 32,
              fontFamily: "Laila",
              fontWeight: "400",
              wordWrap: "break-word",
              display: "grid",
              placeItems: "center",
              marginBottom: "2%",
            }}
          >
            Spotlight
          </div>
          <Col
            style={{
              display: "grid",
              placeItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                placeItems: "center",
                marginBottom: "3%",
              }}
              src={homeThirdRomImage1}
              alt="homeThirdRomImage1"
            />
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "400",
                wordWrap: "break-word",
                display: "grid",
                placeItems: "center",
              }}
            >
              Upcycled Metal Table
            </div>
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "500",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              $500.00
            </div>
          </Col>

          <Col
            style={{
              display: "grid",
              placeItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignContent: "center",
                marginBottom: "3%",
              }}
              src={homeThirdRomImage2}
              alt="homeThirdRomImage2"
            />
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "400",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              Upcycled Metal Table
            </div>
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "500",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
              }}
            >
              $500.00
            </div>
          </Col>
          <Col
            style={{
              display: "grid",
              placeItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                justifyContent: "center",
                marginBottom: "3%",
              }}
              src={homeThirdRomImage3}
              alt="homeThirdRomImage3"
            />
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "400",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              Upcycled Metal Table
            </div>
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "500",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              $500.00
            </div>
          </Col>
          <Col
            style={{
              display: "grid",
              placeItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                justifyContent: "center",
              }}
              src={homeThirdRomImage4}
              alt="homeThirdRomImage4"
            />
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "400",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
                marginTop: "5%",
              }}
            >
              Upcycled Metal Table
            </div>
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "500",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
              }}
            >
              $500.00
            </div>
          </Col>
        </Row>

        {/*Fourth Row "Why choose Us" Section with three coloms */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#A9B388",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 32,
              fontFamily: "Laila",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "5%",
            }}
          >
            Why Choose Us
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontFamily: "Laila",
              fontWeight: "400",
              wordWrap: "break-word",
              marginTop: "2%",
              padding: "2%",
              paddingBottom: "1%",
              // marginBottom: "2%"
            }}
          >
            Choose Irin for a harmonious blend of artistic innovation,
            sustainable luxury, and unparalleled craftsmanship in every bespoke
            creation.
          </div>
          <Row style={{ display: "flex", placeItems: "center", padding: "3%" }}>
            <Col style={{ display: "grid", placeItems: "center" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.8,
                  background: "#FEFFFE",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#1D2C0A",
                    fontSize: 17,
                    fontFamily: "Laila",
                    fontWeight: "400",
                    wordWrap: "break-word",
                    padding: "16.45%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#1D2C0A",
                      fontSize: 22,
                      fontFamily: "Laila",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      display: "grid",
                      placeItems: "start",
                      flex: "start",
                      // paddingTop: "10%",
                      // paddingLeft: "0%",
                      marginBottom: "3%",
                    }}
                  >
                    Sustainability at Heart
                  </div>
                  We are founded on the principles of sustainability. By
                  upcycling metal, we not only reduce environmental impact but
                  also contribute to a circular economy.
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.8,
                  background: "#FEFFFE",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#1D2C0A",
                    fontSize: 17,
                    fontFamily: "Laila",
                    fontWeight: "400",
                    wordWrap: "break-word",
                    padding: "16%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#1D2C0A",
                      fontSize: 22,
                      fontFamily: "Laila",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      display: "grid",
                      placeItems: "start",
                      flex: "start",
                      // paddingTop: "10%",
                      // paddingLeft: "0%",
                      marginBottom: "3%",
                    }}
                  >
                    Artistic Innovation
                  </div>
                  Our creations are more than just products; they are a
                  testament to our commitment to artistic innovation. Every
                  piece tells a unique story of transformation and
                  craftsmanship.
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.8,
                  background: "#FEFFFE",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#1D2C0A",
                    fontSize: 17,
                    fontFamily: "Laila",
                    fontWeight: "400",
                    wordWrap: "break-word",
                    padding: "16%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#1D2C0A",
                      fontSize: 22,
                      fontFamily: "Laila",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      display: "grid",
                      placeItems: "start",
                      flex: "start",
                      // paddingTop: "10%",
                      // paddingLeft: "0%",
                      marginBottom: "3%",
                    }}
                  >
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

        <div
          style={{
            color: "#1D2C0A",
            fontSize: 32,
            fontFamily: "Laila",
            fontWeight: "400",
            wordWrap: "break-word",
            display: "flex",
            justifyContent: "center",
          }}
        >
          New Arrivals
        </div>
        <Row
          style={{
            display: "flex",
            justifyItems: "center",
            placeContent: "center",
            marginBottom: "5%",
          }}
        >
          <Col
            style={{
              display: "grid",
              justifyItems: "center",
              placeContent: "center",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            <img
              style={{
                width: "304px",
                height: "603px",
                top: "2527px",
                left: "110px",
                marginBottom: "15%",
              }}
              src={homeFithRowFirstImage}
              alt="homeFithRowFirstImage"
            />
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "400",
                wordWrap: "break-word",
                textAlign: "left",
              }}
            >
              Upcycled Metal Table
            </div>
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "500",
                wordWrap: "break-word",
                display: "flex",
                justifyItems: "start",
              }}
            >
              $500.00
            </div>
          </Col>
          <Col
            style={{
              display: "grid",
              justifyItems: "center",
              placeContent: "center",
              marginTop: "5%",
              marginBottom: "5%",
              paddingTop: "20%",
            }}
          >
            <img
              style={{
                width: "254px",
                height: "332px",
                top: "2798px",
                left: "453px",
                marginBottom: "15%",
              }}
              src={homeFithRowSecondImage}
              alt="homeFithRowSecondImage"
            />
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Upcycled Metal Table
            </div>
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              $500.00
            </div>
          </Col>
          <Col
            style={{
              display: "grid",
              justifyItems: "center",
              placeContent: "center",
              marginTop: "5%",
              marginBottom: "5%",
              paddingTop: "5%",
            }}
          >
            <img
              style={{
                width: "425px",
                height: "521px",
                top: "2609px",
                left: "745px",
                marginBottom: "15%",
              }}
              src={homeFithRowThirdImage}
              alt="homeFithRowThirdImage"
            />
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Upcycled Metal Table
            </div>
            <div
              style={{
                color: "#1D2C0A",
                fontSize: 15,
                fontFamily: "Laila",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              $500.00
            </div>
          </Col>
        </Row>

        {/* Sixth Row Pre-Order / Customise / Buy Section */}
        <div
          style={{
            width: "100%",
            height: "800px",
            top: "3311px",
            backgroundColor: "#C4661F33",
          }}
        >
          <div
            style={{
              color: "#1D2C0A",
              fontSize: 32,
              fontFamily: "Laila",
              fontWeight: "400",
              wordWrap: "break-word",
              display: "flex",
              justifyContent: "center",
              padding: "2%",
            }}
          >
            Pre-order / Customize / Buy
          </div>

          <Row>
            <Col
              style={{
                paddingLeft: "12%",
                width: "100%",
              }}
            >
              <img
                style={{
                  width: "400px",
                  height: "559px",
                  boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
                }}
                src={homeSixthRowFirstImage}
                alt="homeSixthRowFirstImage"
              />
              <div
                style={{
                  color: "#1D2C0A",
                  fontSize: 15,
                  fontFamily: "Laila",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Upcycled Metal Table
              </div>
              <div
                style={{
                  width: "114px",
                  height: "39px",
                  color: "#1D2C0A",
                  fontSize: 14,
                  fontFamily: "Lancelot",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                  border: "1px #1D2C0A solid",
                }}
              >
                Pre-order now
              </div>
            </Col>
            <Col
              style={{
                paddingLeft: "2%",
                paddingTop: "5%",
                width: "100%",
              }}
            >
              <img
                style={{
                  width: "400px",
                  height: "427px",
                  top: "3530px",
                  boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "3%",
                }}
                src={homeSixthRowSecondImage}
                alt="homeSixthRowSecondImage"
              />
              <div
                style={{
                  color: "#1D2C0A",
                  fontSize: 15,
                  fontFamily: "Laila",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Upcycled Metal Table
              </div>
              <div
                style={{
                  width: "114px",
                  height: "39px",
                  color: "#1D2C0A",
                  fontSize: 14,
                  fontFamily: "Lancelot",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                  border: "1px #1D2C0A solid",
                }}
              >
                Pre-order now
              </div>
            </Col>
          </Row>
        </div>

        {/* Seventh Row Save The Earth Section */}
        <div style={{ height: "50%" }}>
          <Row>
            <Col style={{ paddingTop: "7%" }}>
              <div
                style={{
                  width: "300px",
                  height: "38px",
                  top: "4290px",
                  left: "110px",
                  fontFamily: "Lato",
                  fontSize: "32px",
                  fontWeight: "700%",
                  lineHeight: "38px",
                  letterSpacing: "0em",
                  textalign: "left",
                  paddingLeft: "10%",
                }}
              >
                Save The Earth
              </div>
              <div
                style={{
                  width: "100%",
                  height: "30%",
                  color: "#1D2C0A",
                  fontSize: "20px",
                  fontFamily: "Lato",
                  fontWeight: "500",
                  wordWrap: "break-word",
                  display: "grid",
                  justifyContent: "left",
                  // alignContent: "center",
                  paddingLeft: "10%",
                  paddingBottom: "5%",
                  paddingTop: "2%",
                }}
              >
                Irin, inspired by the Yoruba word for metal, embodies
                sustainability and <br /> artistic innovation, transforming both
                new and discarded metallic materials <br /> into bespoke art and
                lifestyle pieces.
              </div>
              <div
                style={{
                  height: "50%",
                  color: "#1D2C0A",
                  fontSize: 20,
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  paddingLeft: "10%",
                  paddingBottom: "1%",
                }}
              >
                Learn more
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "10%",
                  gap: "10px",
                }}
              >
                <img
                  style={{
                    width: "23px",
                    height: "21px",
                    top: "4611px",
                    left: "143px",
                    borderRadius: "30px",
                  }}
                  src={RectangaleIconYellow}
                  alt=""
                />
                <img
                  style={{
                    width: "23px",
                    height: "21px",
                    top: "4611px",
                    left: "143px",
                    borderRadius: "30px",
                  }}
                  src={RectangaleIconGreen}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <img
                style={{
                  width: "540px",
                  height: "488px",
                  top: "4284px",
                  left: "630px",
                  paddingTop: "10%",
                  paddingLeft: "2%",
                }}
                src={homeSeventhRowSecondImage}
                alt=""
              />
            </Col>
          </Row>
        </div>
        {/*Home Eigth Row Subscribe To Our News Letter */}

        <div className="containerFluid"
          style={{
            width: "100%",
            height: "400px",
            // top: "4689px",
            left: "2px",
            backgroundColor: "rgba(196, 102, 31, 0.1)",
            marginTop: "3%",
            display: "grid",
            justifyContent: "center",
            marginBottom: "0%"

          }}
        >
         
          <div
            style={{
              color: "#1D2C0A",
              fontSize: 32,
              fontFamily: "Laila",
              fontWeight: "600",
              wordWrap: "break-word",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1%",
              marginBottom: "0%"
            }}
             >
            Subscribe To Our News Letter
            
            </div>
            <div style={{display: "flex",justifyContent: "center",alignContent: "center"}}>
            <p>Be the first to get notify of our new arrivals,Deals and Updates. Don't miss out!!</p>
          </div>
          
          <div style={{display: "flex", justifyContent: "center",gap: "10px", }}>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  placeholder="First name"
                  style={{
                    width: "264px",
                    height: "60px",
                    top: "4882px",
                    left: "112px",
                    borderRadius: "0px",
                    color: "#8C756A80"
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Last name"
                  style={{
                    width: "264px",
                    height: "60px",
                    top: "4882px",
                    left: "112px",
                    borderRadius: "0px",
                    color: "#8C756A80"
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Email Address"
                  style={{
                    width: "264px",
                    height: "60px",
                    top: "4882px",
                    left: "112px",
                    borderRadius: "0px",
                    color: "#8C756A80"
                  }}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" className="mb-2" style={{width: "156px",height: "60px",backgroundColor: "rgba(196, 102, 31, 0.1)",borderRadius: "0px",borderStyle: "groove black", borderColor: "black",color: "rgba(140, 117, 106, 1)"}}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
          </div>
        </div>


        {/*Ninth Row Join US Section*/}
        <div style={{width: '100%', height: '603px', background: 'rgba(249, 235, 199, 0.68)',paddingTop: "3%", paddingBottom: "3%"}} >
            <div style={{display: "flex",justifyContent:"center",color: '#1D2C0A', fontSize: 32, fontFamily: 'Laila', fontWeight: '700', wordWrap: 'break-word'}}>Join Us</div>
            <div style={{width: '100%', height: '10%',display:"flex",justifyContent: "center",justifyItems:"stretch",alignItems:"center", color: '#1D2C0A', fontSize: 14, fontFamily: 'Laila', fontWeight: '400', wordWrap: 'break-word',marginBottom:"2%"}}>
              "Embark on an exclusive and sustainable 
            journey of creativity and reinvention with Irin, 
            where artistry meets luxury in every meticulously crafted piece.</div>
            <div style={{display: "flex",justifyContent: "center", justifyItems: "normal",}}>
              <Row style={{display: "flex",justifyContent: "center", justifyItems: "normal", gap: "60px"}}>
                <Col><img
                style={{
                  width: "478px",
                  height: "363px",
                  top: "5270px",
                  left: "112px",
                  // paddingTop: "10%",
                  // paddingLeft: "2%",
                }}
                src={homeNinthRowFirstImage}
                alt=""
              />
              </Col>
                <Col><div style={{display: "grid", justifyContent: "center",alignItems: "center",gap: "10px", }}>
          <Form>
            <Row style={{display: "grid", gap: "60px", paddingTop: "5%"}}>
              <Col>
                <Form.Control
                  placeholder="First name"
                  style={{
                    width: "514px",
                    height: "60px",
                    top: "5317px",
                    left: "661px",
                    borderRadius: "0px",
                    color: "#A9B3881A"
                  }}
                />
              </Col>
             
              <Col>
                <Form.Control
                  placeholder="Email Address"
                  style={{
                    width: "514px",
                    height: "60px",
                    top: "61px",
                    left: "661px",
                    borderRadius: "0px",
                    color: "#8C756A80"
                  }}
                />
              </Col>
              <Col style={{gap: "2%",display: "flex"}} xs="auto">
                <Button type="submit" className="mb-2" style={{width: "160px",height: "45px",color: "#fff",backgroundColor: "#A9B388",borderRadius: "0px",borderStyle: "groove black", borderColor: "black",}}>
                  sign Up
                </Button>
                <Button type="submit" className="mb-2" style={{width: "160px",height: "45px",color: "#1D2C0A",backgroundColor: "#5F6F521A",borderRadius: "0px",borderStyle: "groove black", borderColor: "black",}}>
                  login
                </Button>
              </Col>
            </Row>
          </Form>
          </div></Col>
              </Row>
            </div>
        </div>
      </Container>
      
    </div>
  );
}

export default Home;
