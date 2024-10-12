import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Works from './Works'
import Cards from './Cards'
import Footer from './Footer'
import Whyus from './Whyus'
import Us from './Us'
import Testimonial from './Testimonial'

function Main() {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Cards />
      <Us />
      <Whyus />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Main