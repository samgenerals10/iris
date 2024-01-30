import React from "react";
import "../Categories/catergories.css";
import homeDecorl from "../Categories/Image/homeDecorImage.svg";
import furntiuerlmage from "../Categories/Image/furntiuerImage.svg";
import artsImage from "../Categories/Image/ArtsImage.svg";
import { Link } from "react-router-dom";

function Catergories() {
  return (
    <>
      <div className="container">
        <div className=" row">
          <div className="col-md-12 catergoirs-Box mt-5">
            <Link to="/Product">
              <div class="image-container">
                <img
                  src={homeDecorl}
                  alt="homeDecorl"
                  className="home-Decorle"
                />
                <div class="overlay">
                  <p className="homeText">Home Decor</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row mt-5 ms-5 ">
          <div className="col-lg-6">
            <Link to="/Product">
            <div class="image-container">
              <img src={artsImage} alt="furntiuer" className="artsImage" />
              <div class="Art-overlay">
                <p className="homeText">Arts</p>
                
              </div>
            </div>
            </Link>
           
          </div>

          <div className="col-lg-6">
            <Link to="/Product">
            <div class="image-container">
              <img src={furntiuerlmage} alt="furntiuer" className="furntiuer" />
              <div class="furntiner-overlay">
                <p className="homeText">Furniture</p>
              </div>
            </div>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Catergories;
