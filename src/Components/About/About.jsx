import React from 'react'
import Navbar from './AboutNavbar'
import Content from './Content'

function About() {
  return (
    <div className='w-full h-screen text-black' >
      <Navbar/>
      <Content/>    
    </div>
  )
}

export default About