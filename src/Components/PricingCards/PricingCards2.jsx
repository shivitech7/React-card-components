import React from 'react';
import PeopleIcon from './Images/peopleIconWhite.png';

const PricingCards2 = () => {
    return (
        <div className="pricingCard-wrapper">
            <div style={{
                backgroundColor: '#23A6F0'
            }} className="header-icon-wrapper">
                <img width={32.89} height={24.89} src={PeopleIcon} alt="People icon" />
            </div>
            <h1>Standard</h1>
            <p style={{
                fontWeight: '700',
                fontSize: '16px',
                letterSpacing: '0.1px',
                textAlign: 'center'
            }}>Organize across all <br />
                apps by hand</p>
            <div className="price-wrapper">
                <p style={{
                    fontSize: '40px',
                    fontWeight: '700',
                    color: '#23A6F0'
                }}>0 $</p>
                <p style={{
                    color: '#8EC2F2',
                    fontWeight: '700',
                    fontSize: '16px',
                    letterSpacing: '0.1px'
                }}>Per Month</p>
            </div>
            <p style={{
                textAlign: 'center'
            }}>
                Slate helps you see how<br />
                many more days you need to<br />
                work to reach your financial<br />
                goal for the month and year.
            </p>
            <button style={{
                width: '246px',
                cursor: 'pointer'
            }} className="button-try-for-free">
                <p style={{
                    color: 'white'
                }}>Try for free</p>
            </button>
        </div>
    )
}

export default PricingCards2