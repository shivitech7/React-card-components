import React from 'react'
import CardItem1 from './CardItem1.jsx';
import CardItem2 from './CardItem2.jsx';
import CardItem3 from './CardItem3.jsx';
import CardItem4 from './CardItem4.jsx';

const CardItems = () => {
    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }} className="container">
            <h1>Cards for card items</h1>
            <div style={{
                display:'flex',
                alignItems:'center',
                gap:'40px'
            }}>
                <CardItem1 />
                <CardItem2 />
                <CardItem3 />
                <CardItem4 />
            </div>
        </div>
    )
}

export default CardItems