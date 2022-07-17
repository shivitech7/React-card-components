import React from 'react';
import Image4 from './Images/image4.png';
import StarColoured from './Images/starColoured.png';
import Star from './Images/star.png';

const Testimonial2 = () => {
    return (
        <div style={{
            flexDirection:'column',
            padding:'40px',
            gap:'30px'
        }} className="testimonial-wrapper">
            <div style={{
                backgroundImage: `url(${Image4})`,
                width: '149px',
                height: '149px',
                backgroundSize: 'cover',
                borderRadius:'50%'
            }}>
            </div>
            <div style={{
                alignItems:'center',
                paddingLeft:'0px',
                paddingRight:'0px'
            }} className="testimonial-content-wrapper">
                <p style={{
                    fontWeight: '500',
                    textAlign:'center',
                }}>
                    Slate helps you see how<br />
                    many more days you need<br />
                    to work to reach your financial<br />
                    goal for the month and year.
                </p>
                <div className="stars-wrapper">
                    <img width={18.34} height={18.35} src={StarColoured} alt="rating star" />
                    <img width={18.34} height={18.35} src={StarColoured} alt="rating star" />
                    <img width={18.34} height={18.35} src={StarColoured} alt="rating star" />
                    <img width={18.34} height={18.35} src={StarColoured} alt="rating star" />
                    <img width={18.34} height={18.35} src={Star} alt="rating star" />
                </div>
                <div style={{
                    alignItems:'center',
                    gap:'15px'
                }} className="name-designation-wrapper">
                    <p style={{
                        color:'#23A6F0'
                    }}>Regina Miles</p>
                    <p>Designer</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial2