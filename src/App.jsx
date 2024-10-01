import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/src/pages/Layout'
import Home from '/src/pages/Home'
import Badges from '/src/pages/Badges'
import Banners from '/src/pages/Banners'
import Cards from '/src/pages/Cards'
import Testimonials from '/src/pages/Testimonials'



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="badges" element={<Badges />} />
          <Route path="banners" element={<Banners />} />
          <Route path="cards" element={<Cards />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}