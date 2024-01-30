import React from 'react'
import { Link } from 'react-router-dom'
import "../Products/products.css"
import image1 from "../Products/Images/Rectangle 130.svg"
import image2 from "../Products/Images/Rectangle 131.svg"
import image3 from "../Products/Images/Rectangle 132.svg"
import image4 from "../Products/Images/Rectangle 133.svg"
import image5 from "../Products/Images/Rectangle 134.svg"
import image6 from "../Products/Images/Rectangle 135.svg"
import image7 from "../Products/Images/Rectangle 137.svg"
import image8 from "../Products/Images/Rectangle 136.svg"
import image9 from  "../Products/Images/Rectangle 138.svg"

function Products() {
  return (
    <>
    <div className="container" >
      <div className="row  first-Box">
        <div className="col-lg-4">
     <Link to="/ProductInform">
     <img src={image1} className='imag1'/>
     </Link>
        </div>
        <div className="col-lg-4 ">
         <Link to="/ProductInform">
         <img src={image2} className='imag2'/>
         </Link>
        </div>
        <div className="col-lg-4 boxima ">
          <Link to="/ProductInform">
          <img src={image3} className='imag4'/>
          </Link>
        </div>
      </div>

      <div className='row'>
     <div className='col-lg-4'>
    <Link to="/ProductInform">
    <img src={image4} className='imag3'/>
    </Link>
     </div>
     <div className='col-lg-4'>
      <Link to="/ProductInform" >
      <img src={image5} className='imag5'/>
      </Link>
   
     </div>
     <div className='col-lg-4'>
      <Link to="/ProductInform">
      <img src={image6} className='imag6'/>
      </Link>
     </div>
      </div>
      <div className='row'>
        <div className='col-lg-4'>
          <Link to="/ProductInform">
          <img src={image7} className='imag7'/>
          </Link>
        
        </div>
        <div className='col-lg-4 '>
        <Link to="/ProductInform">
        <img src={image8} className='imag8'/>
        </Link>
      
        </div>
        <div className='col-lg-4'>
        <Link to="/ProductInform">
        <img src={image9} className='imag9'/>
        </Link>
       
        </div>
      </div>
    </div>
    </>
  )
}

export default Products