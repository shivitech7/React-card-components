import React from 'react';
import './Styles/CardItem2.css';
import PeopleIcon from './Images/peopleIcon.png';
import Arrow from './Images/arrowIcon.png';

const CardItem2 = () => {
    return (
        <div className="card-item2-wrapper">
            <div className="card-header-wrapper2">
                <div className="header-icon-wrapper">
                    <img width={32.89} height={24.89} src={PeopleIcon} alt="People icon" />
                </div>
                <p style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: ' #252B42',
                    letterSpacing: '0.1px',
                    width:'187px'
                }}>The quick fox over the lazy dog</p>
            </div>
            <p style={{
                width:'255px',
                fontWeight:'500'
            }}>
                The gradual accumulation of
                information about atomic and
                small-scale behaviour during
            </p>
            <button className="button-more">
                <p style={{
                    color: '#23A6F0'
                }}>More</p>
                <img width={9} height={16} src={Arrow} alt="Arrow icon" />
            </button>
        </div>
    )
}

export default CardItem2