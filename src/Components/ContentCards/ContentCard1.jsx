import React from 'react'
import './Styles/ContentCard1.css';

const ContentCard1 = () => {
    return (
        <div className="content-card-wrapper">
            <h1 style={{
                color: 'white'
            }}>Life Tips From Top Ten Adventure Travelers</h1>
            <p style={{
                color: 'white',
                fontSize: '16px',
                fontWeight: '500'
            }}>Slate helps you see how many more days you need to work to <br />
                reach.</p>
            <div className="links-container">
                <p style={{
                    color: 'white',
                    cursor: 'pointer'
                }}>Google</p>
                <p style={{
                    color: 'white',
                    cursor: 'pointer'
                }}>Trending</p>
                <p style={{
                    color: 'white',
                    cursor: 'pointer'
                }}>New</p>
            </div>
        </div>
    )
}

export default ContentCard1