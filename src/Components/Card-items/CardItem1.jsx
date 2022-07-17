import React from 'react'
import CardItem2 from './CardItem2';
import CardItem3 from './CardItem3';
import PeopleIcon from './Images/peopleIcon.png';
import './Styles/CardItem1.css';

const CardItem1 = () => {
    return (
            <div className="card-item1-wrapper">
                <div className="card-header-wrapper">
                    <div className="header-icon-wrapper">
                        <img width={32.89} height={24.89} src={PeopleIcon} alt="People icon" />
                    </div>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: 'white',
                        letterSpacing: '0.1px'
                    }}>The quick fox <br /> over the lazy dog</p>
                </div>
                <div className="card-content-wrapper">
                    <ul className="card-content-list">
                        <li><p>- The best products start <br />
                            with Figma</p></li>
                        <li><p>- Design with real data</p></li>
                        <li><p>- Lightning fast prototyping</p></li>
                        <li><p>- Fastest way to organize</p></li>
                        <li><p>- Work at the speed of thought.</p></li>
                    </ul>
                    <p style={{
                        color:'#23A6F0'
                    }}>Learn More</p>
                </div>
            </div>
    )
}

export default CardItem1