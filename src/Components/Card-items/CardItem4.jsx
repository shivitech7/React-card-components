import React from 'react';
import ProductImage from './Images/productImage.png';

const CardItem4 = () => {
    return (
        <div style={{
            padding: '0px'
        }} className="card-item3-wrapper">
            <div style={{
                backgroundImage: `url(${ProductImage})`,
                width: '330px',
                height: '215px',
                backgroundSize: 'cover'
            }}>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                padding:'0px 50px 40px 50px',
                gap:'20px',
                alignItems:'center'
            }}>
                <p style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: ' #252B42',
                    letterSpacing: '0.1px',
                }}>At your fingertips</p>

                <p style={{
                    textAlign: 'center',
                    fontWeight: '500'
                }}>
                    Slate helps you see how many<br />
                    more days you need to work<br />
                    to reach
                </p>
                <button className="button-try-for-free">
                    <p style={{
                        color: 'white'
                    }}>Try for free</p>
                </button>
            </div>
        </div>
    )
}

export default CardItem4