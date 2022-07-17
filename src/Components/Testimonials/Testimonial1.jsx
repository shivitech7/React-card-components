import React from 'react'
import './Styles/Testimonial1.css';
import Image1 from './Images/formImage.png';
import StarColoured from './Images/starColoured.png';
import Star from './Images/star.png';

const Testimonial1 = () => {
    return (
        <div className="testimonial-wrapper">
            <div style={{
                backgroundImage: `url(${Image1})`,
                width: '128px',
                height: '292px',
                backgroundSize: 'cover'
            }}>
            </div>
            <div className="testimonial-content-wrapper">
                <div className="name-designation-wrapper">
                    <h1>Regina Miles</h1>
                    <p>Designer</p>
                </div>
                <div className="stars-wrapper">
                    <img width={18.34} height={18.35} src={StarColoured} alt="rating star" />
                    <img width={18.34} height={18.35} src={StarColoured} alt="rating star" />
                    <img width={18.34} height={18.35} src={StarColoured} alt="rating star" />
                    <img width={18.34} height={18.35} src={StarColoured} alt="rating star" />
                    <img width={18.34} height={18.35} src={Star} alt="rating star" />
                </div>
                <p style={{
                    fontWeight: '500'
                }}>
                    This proved to be impossible<br />
                    using concepts of space and<br />
                    time. Einstein new view of<br />
                    time first and then
                </p>
            </div>
        </div>
    )
}

export default Testimonial1;