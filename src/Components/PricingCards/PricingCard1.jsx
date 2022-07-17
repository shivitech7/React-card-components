import React from 'react';
import './Styles/PricingCard1.css';
import CheckIcon from './Images/checkIcon.png';

const PricingCard1 = () => {
    return (
        <div style={{
            position:'relative'
        }} className="pricingCard-wrapper">
            <div style={{
                position:'absolute',
                width:'90px',
                height:'90px',
                borderRadius:'52px',
                backgroundColor:'#E77C40',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                right:'16.5px',
                top:'-26px'
            }}>
                <p style={{
                    fontSize:'24px',
                    fontWeight:'700',
                    color:'white',
                    letterSpacing:'0.1px'
                }}>New</p>
            </div>
            <h1>FREE</h1>
            <p style={{
                    fontWeight:'700',
                    fontSize:'16px',
                    letterSpacing:'0.1px',
                    textAlign:'center'
                }}>Organize across all <br />
                apps by hand</p>
            <div className="price-wrapper">
                <p style={{
                    fontSize:'40px',
                    fontWeight:'700',
                    color:'#23A6F0'
                }}>19 $</p>
                <p style={{
                    color:'#8EC2F2',
                    fontWeight:'700',
                    fontSize:'16px',
                    letterSpacing:'0.1px'
                }}>Per Month</p>
            </div>
            <button style={{
                width:'246px',
                cursor:'pointer'
            }} className="button-try-for-free">
                <p style={{
                    color: 'white'
                }}>Try for free</p>
            </button>

            <ul className="available-services-list-wrapper">
                <div className="list-wrapper">
                    <div className="check-icon-container">
                        <img width={16} height={11} src={CheckIcon} alt="check icon" />
                    </div>
                    <li><p className="list-item">Unlimited product updates</p>
                    </li>
                </div>
                <div className="list-wrapper">
                    <div className="check-icon-container">
                        <img width={16} height={11} src={CheckIcon} alt="check icon" />
                    </div>
                    <li><p className="list-item">Unlimited product updates</p>
                    </li>
                </div>
                <div className="list-wrapper">
                    <div className="check-icon-container">
                        <img width={16} height={11} src={CheckIcon} alt="check icon" />
                    </div>
                    <li><p className="list-item">Unlimited product updates</p>
                    </li>
                </div>
                <div className="list-wrapper">
                    <div style={{
                        backgroundColor:'#BDBDBD'
                    }} className="check-icon-container">
                        <img width={16} height={11} src={CheckIcon} alt="check icon" />
                    </div>
                    <li><p className="list-item">1GB  Cloud storage</p>
                    </li>
                </div>
                <div className="list-wrapper">
                    <div style={{
                        backgroundColor:'#BDBDBD'
                    }} className="check-icon-container">
                        <img width={16} height={11} src={CheckIcon} alt="check icon" />
                    </div>
                    <li><p className="list-item">Email and community<br />
                        support</p>
                    </li>
                </div>
            </ul>

        </div>
    )
}

export default PricingCard1