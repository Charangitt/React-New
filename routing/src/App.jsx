import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Users" element={<Users/>}/>
        

      </Routes>
    
    </BrowserRouter>
  )
}

export default App