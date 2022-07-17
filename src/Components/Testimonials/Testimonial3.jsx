import React from 'react';
import Image3 from './Images/image3.png';

const Testimonial3 = () => {
    return (
        <div style={{
            flexDirection: 'column',
            padding: '30px 40px 30px 40px',
            gap: '10px'
        }} className="testimonial-wrapper">
            <div style={{
                backgroundImage: `url(${Image3})`,
                width: '149px',
                height: '149px',
                backgroundSize: 'cover',
                borderRadius: '50%'
            }}>
            </div>
            <div style={{
                alignItems: 'center',
                paddingLeft: '0px',
                paddingRight: '0px',
                gap:'10px'
            }} className="testimonial-content-wrapper">
                <div style={{
                    alignItems: 'center',
                    gap: '15px'
                }} className="name-designation-wrapper">
                    <p style={{
                        color: '#23A6F0'
                    }}>Founder</p>
                    <h1 style={{
                        fontSize:'16px'
                    }}>User Name</h1>
                </div>
                <p style={{
                    fontWeight: '500',
                    textAlign: 'center',
                }}>
                    the quick fox jumps<br />
                    over the lazy dog
                </p>
            </div>
        </div>
    )
}

export default Testimonial3