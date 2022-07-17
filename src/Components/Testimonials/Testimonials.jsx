import React from 'react'
import Testimonial1 from './Testimonial1'
import Testimonial2 from './Testimonial2'
import Testimonial3 from './Testimonial3'
import Testimonial4 from './Testimonial4'

const Testimonials = () => {
  return (
    <div style={{
      // border:'1px solid black',
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent:'space-around'
    }} className="container">
      <h1>testimonial Cards</h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px'
      }}>
        <Testimonial1 />
        <Testimonial2 />
        <Testimonial3 />
        <Testimonial4 />
      </div>
    </div>
  )
}

export default Testimonials