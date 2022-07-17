import React from 'react';
import FacebookIcon from './Images/facebookIcon.png';
import InstaIcon from './Images/instaIcon.png';
import TwiterIcon from './Images/twiterIcon.png';
import Image2 from './Images/image2.png';

const Testimonial4 = () => {
    return (
        <div style={{
            flexDirection: 'column',
            gap: '10px'
        }} className="testimonial-wrapper">
            <div style={{
                backgroundImage: `url(${Image2})`,
                width: '230px',
                height: '231px',
                backgroundSize: 'cover',
            }}>
            </div>
            <div style={{
                alignItems: 'center',
                paddingLeft: '0px',
                paddingRight: '0px',
                gap: '15px',
                paddingTop: '30px',
                paddingBottom: '30px'
            }} className="testimonial-content-wrapper">
                <div style={{
                    alignItems: 'center',
                    gap: '15px'
                }} className="name-designation-wrapper">
                    <h1 style={{
                        fontSize: '16px'
                    }}>User Name</h1>
                    <p>Profession</p>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '20px'
                }}>
                    <img style={{
                        cursor: 'pointer'
                    }} width={23} height={23} src={FacebookIcon} alt="facebook icon" />
                    <img style={{
                        cursor: 'pointer'
                    }} width={22} height={22} src={InstaIcon} alt="instagram icon" />
                    <img style={{
                        cursor: 'pointer'
                    }} width={22} height={18} src={TwiterIcon} alt="twiter icon" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial4;