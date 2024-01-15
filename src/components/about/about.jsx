import React from 'react'
import "../about/about.css"
import  artsImage from "../about/Images/ArtsImage.svg"    


function about() {
  return (
    <>
    <div className='AboutTop-box'>
      <img src={artsImage} alt='ArtImage'  className='artImage'/>
    </div>
    </>
  )
}

export default about