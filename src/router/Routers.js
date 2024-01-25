import React from 'react'
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom'
import Home  from "../components/home/Home"
import About from '../components/about/About'
import Catergories from '../components/Categories/Catergories'
import PreOrder from '../components/PreOrder/PreOrder'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Products from '../components/Products/Products'
import Support from '../components/Support/Support'
import Checkout from '../components/Checkout/Checkout'
import Navbar from '../components/Navbar/Navbar'
// import Footer from '../components/Footer/Footer'
import Subscribe from '../components/Subscribe/Subscribe'
import ProductInfo from '../components/ProductInfrom/ProductInfo'
import AddToCart from "../components/AddToCart/AddToCart"
function Routers() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/Categories' element={<Catergories/>} />
            <Route path='/PreOrder' element={<PreOrder/>}/>
            <Route path='/ProductDetails' element={<ProductDetails/>} />
            <Route path='/Product' element={<Products/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/ProductInform' element={<ProductInfo/>}/>
            <Route path='/AddtoCart' element={<AddToCart/>} />
        </Routes>
        <Subscribe/>
        {/* <Footer/> */}
        </BrowserRouter>
    </div>
  )
}

export default Routers