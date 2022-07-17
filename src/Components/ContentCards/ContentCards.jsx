import React from 'react'
import ContentCard1 from './ContentCard1'
import ContentCard2 from './ContentCard2';

const ContentCards = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <h1>Content cards</h1>
      <div style={{
        display:'flex',
        alignItems:'center',
        gap:'40px'
      }}>
        <ContentCard1 />
        <ContentCard2 />
      </div>
    </div>
  )
}

export default ContentCards;