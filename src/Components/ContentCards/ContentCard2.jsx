import React from 'react';
import ProductCoverImage from './Images/productCoverImg.png';
import './Styles/ContentCard2.css';

const ContentCard2 = () => {
    return (
        <div className="content-card2-wrapper">
            <img width={327} height={202} src={ProductCoverImage} alt="product cover image" />
            <div className="content-card-content-wrapper">
                <p style={{
                    color: '#BDBDBD'
                }}>Course item</p>
                <h1>Content Writer</h1>
                <p style={{
                    color: '#858585',
                    fontSize: '16px',
                    fontWeight: '500'
                }}>Slate helps you see how many <br />
                    more days.</p>
                <div className="links-container">
                    <p>Full time</p>
                    <p>Premium</p>
                    <p>1 July 2019</p>
                </div>
                <p style={{
                    color: '#23A6F0',
                    cursor: 'pointer'
                }}>View Details</p>
            </div>
        </div>
    )
}

export default ContentCard2