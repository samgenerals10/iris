import React from 'react'
import  "../AddToCart/AddToCart.css"
import upcyledMetalTable from "../AddToCart/image/UpCyled Metal Table.svg"
import  womanimage from  "../AddToCart/image/womanIamge.svg"
import BtnAddToCart from "../BtnAddToCart/BtnAddToCart"



function AddToCart() {
  return (
    <>
    <div className='container mt-5' >
    <table class="table">
  <thead className="table-dark">
    <tr>
      <th scope="col" className='add-To-Cart'>Product name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>


    </tr>
  </thead>
  <tbody>
    <tr>
    <td className='d-flex '>
        <img src={upcyledMetalTable} alt='metalTable'/>
        <div className=' '>
        <p className=' m-3 first-info'>Upcycled Metal Table</p>
        <p className='m-3 info'>Lorem ipsum dolor sit amet consectetur. Non non dis senectus est quis nunc...</p>
    </div>
    </td>
      <td className='pt-5'>$500.00</td>
      <td className='pt-5'>
      <BtnAddToCart/>
      </td>
      <td className='pt-5'>
      $500.00
      </td>
    </tr>
    <tr>
    <td className='d-flex  '>
        <img src={womanimage} alt='metalTable'/>
        <div className=' '>
        <p className='first-info m-3'>Upcycled Metal Table</p>
        <p className='m-3 info'>Lorem ipsum dolor sit amet consectetur. Non non dis senectus est quis nunc...</p>
    </div>
    </td>   
      <td className='pt-5'>$500.00</td>
      <td className='pt-5'><BtnAddToCart/></td>
      <td className='pt-5'>$500.00</td>
    </tr>
    <tr>
    <td className='d-flex '>
        <img src={upcyledMetalTable} alt='metalTable'/>
        <div className=' '>
        <p className='first-info m-3'>Upcycled Metal Table</p>
        <p className='m-3 info'>Lorem ipsum dolor sit amet consectetur. Non non dis senectus est quis nunc...</p>
    </div>
    </td>
      <td className='pt-5'>$500.00</td>
      <td className='pt-5'><BtnAddToCart/></td>
      <td className='pt-5'>$500.00</td>
    </tr>
    <tr>
    <td className='d-flex '>
        <img src={upcyledMetalTable} alt='metalTable'/>
        <div className=' '>
        <p className='first-info m-3'>Upcycled Metal Table</p>
        <p className='m-3 info'>Lorem ipsum dolor sit amet consectetur. Non non dis senectus est quis nunc...</p>
    </div>
    </td>
      <td className='pt-5'>$500.00</td>
      <td className='pt-5'><BtnAddToCart/></td>
      <td className='pt-5'>$500.00</td>
    </tr>
  </tbody>
</table>


    </div>
    </>
  )
}

export default AddToCart

{/* <div className='row'>
<div className='col-lg-12 col-md-12 col-12'>
<div className='  justify-content-between addToCart-headerBox'>
<p className='p-2'>Product name </p>
    <p className='p-2 pR'>Price</p>
    <p className='p-2 pQ'>Quantity</p>
    <p className=' p-2 pT'>Total</p>
</div>
</div>
</div>
<div className='row item-box'>
<div className='col-md-4 d-flex boximage '>
    <img src={upcyledMetalTable} alt='metaltable'/>
    <div className=' '>
        <p className=' m-2'>Upcycled Metal Table</p>
        <p className='m-2  info'>Lorem ipsum dolor sit amet consectetur. Non non dis senectus est quis nunc...</p>
    </div>
</div>
</div> */}