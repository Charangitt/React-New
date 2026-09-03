import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from '../pages/Home'
import  Products  from '../pages/Products'
import { About } from '../pages/About'
export const App = () => {
  return (
    <>
      <BrowserRouter>
        
          <div className='flex justify-evenly bg-black text-white' >
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </div>
          <br className='h-[1px]'/>
        {/* <div className='bg-black h-[200vh] text-white'>hi</div> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}
