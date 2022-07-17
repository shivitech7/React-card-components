import React from 'react';
import PeopleIcon from './Images/peopleIconWhite.png';
import './Styles/CardItem3.css';
import mackbook from './Images/MackbookPro.png';

const CardItem3 = () => {
    return (
        <div className="card-item3-wrapper">
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                gap:'35px'
            }} className="card-header-wrapper3">
                <div style={{
                    backgroundColor: '#23A6F0'
                }} className="header-icon-wrapper">
                    <img width={32.89} height={24.89} src={PeopleIcon} alt="People icon" />
                </div>
                <p style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: ' #252B42',
                    letterSpacing: '0.1px',
                }}>At your fingertips</p>
            </div>
            <p style={{
                textAlign:'center',
                fontWeight:'500'
            }}>
                Slate helps you see how many<br/>
                more days you need to work<br/>
                to reach
            </p>
            <button style={{
                cursor:'pointer'
            }} className="button-try-for-free">
                <p style={{
                    color: 'white'
                }}>Try for free</p>
            </button>
            <img width={275.42} height={154} src={mackbook} alt="mackbook pro" />
        </div>
    )
}

export default CardItem3