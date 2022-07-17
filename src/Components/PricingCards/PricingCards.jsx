import React from 'react'
import PricingCard1 from './PricingCard1'
import PricingCards2 from './PricingCards2'

const PricingCards = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      height:'100vh',
      alignItems:'center',
      justifyContent: 'space-around'
    }}>
      <h1>Pricing style cards</h1>
      <div style={{
        display:'flex',
        alignItems:'center',
        gap:'40px'
      }}>
        <PricingCard1 />
        <PricingCards2 />
      </div>
    </div>
  )
}

export default PricingCards