import React from 'react'
import Star from './Images/star.png';
import StarColoured from './Images/starColoured.png';
import Eye from './Images/eyeIcon.png';
import Download from './Images/downloadIcon.png';
import './Styles/ProductItem1.css';
import FavouriteIcon from './Images/favouriteIcon.png';

const ProductItem1 = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            // height: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
        }} className="container">
            <h1>Product item cards</h1>
            <div className='product-item-1-wrapper'>
                <div className="item-image">
                    <p className="sale-chip">Sale</p>
                    <div className="favourite-icon-container">
                        <img width={17.5} height={15.63} src={FavouriteIcon} alt="favourite icon" />
                    </div>
                </div>
                <div className="product-description-wrapper">
                    <h1 style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '24px',
                        fontWeight: '500',
                        letterSpacing: '0.2px',
                        color: '#252B42'
                    }}>Floating Phone</h1>
                    <p>By <span>Jane Cooper</span> in Tech , Products</p>
                    <div className="rating-section-wrapper">
                        <div className="rating-stars-wrapper">
                            <img width={18.34} height={18.35} src={StarColoured} alt="rating icon" />
                            <img width={18.34} height={18.35} src={StarColoured} alt="rating icon" />
                            <img width={18.34} height={18.35} src={StarColoured} alt="rating icon" />
                            <img width={18.34} height={18.35} src={StarColoured} alt="rating icon" />
                            <img width={18.34} height={18.35} src={Star} alt="rating icon" />
                        </div>
                        <p>10 Reviews</p>
                    </div>
                    <div className="total-sales-container">
                        <img width={15} height={14} src={Download} alt="Download icon" />
                        <p>15 Sales</p>
                    </div>
                </div>
                <div className="product-pricing-wrapper">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '5px'
                    }}>
                        <div className="product-price-container">
                            <p style={{
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '16px'
                            }}>$13.33</p>
                        </div>
                        <p>Starting cost</p>
                    </div>
                    <button className="view-profile-button">
                        <p style={{
                            color: 'white'
                        }}>View Profile</p>
                    </button>
                </div>
            </div>


            {/* Product item 2 */}
            <div className="container2">
                <div className='product-item-2-wrapper'>
                    <div className="item-image">
                        <p className="sale-chip">Sale</p>
                        <div className="favourite-icon-container">
                            <img width={17.5} height={15.63} src={FavouriteIcon} alt="favourite icon" />
                        </div>
                    </div>
                    <div style={{
                        paddingLeft: '5px',
                        paddingRight: '5px'
                    }} className="product-description-wrapper">
                        <h1 style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '24px',
                            fontWeight: '500',
                            letterSpacing: '0.2px',
                            color: '#252B42'
                        }}>Floating Phone</h1>
                        <p>By <span>Jane Cooper</span> in Tech , Products</p>
                        <div className="rating-section-wrapper">
                            <div className="rating-stars-wrapper">
                                <img width={18.34} height={18.35} src={StarColoured} alt="rating icon" />
                                <img width={18.34} height={18.35} src={StarColoured} alt="rating icon" />
                                <img width={18.34} height={18.35} src={StarColoured} alt="rating icon" />
                                <img width={18.34} height={18.35} src={StarColoured} alt="rating icon" />
                                <img width={18.34} height={18.35} src={Star} alt="rating icon" />
                            </div>
                            <p>10 Reviews</p>
                        </div>
                        <div className="product-price-container2">
                            <p style={{
                                color: '#252B42',
                                fontWeight: '700',
                                fontSize: '16px'
                            }}>$13.33</p>
                        </div>
                        <div className="total-sales-container">
                            <img width={15} height={14} src={Download} alt="Download icon" />
                            <p>15 Sales</p>
                        </div>
                    </div>

                    <div className="size-options-wrapper">
                        <div className="size-container">
                            <p>XL</p>
                        </div>
                        <div className="size-container">
                            <p>L</p>
                        </div>
                        <div className="size-container">
                            <p>M</p>
                        </div>
                        <div className="size-container">
                            <p>S</p>
                        </div>
                    </div>

                    <button className="view-profile-button">
                        <p style={{
                            color: 'white'
                        }}>Select Option</p>
                    </button>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px'
                    }}>
                        <img width={20} height={15.38} src={Eye} alt="eye icon" />
                        <p>Quick View</p>
                    </div>
                </div>

                {/* Product item 3 */}
                <div className='product-item-3-wrapper'>
                    <div className="item-image">
                        <p className="sale-chip">Sale</p>
                        <div className="favourite-icon-container">
                            <img width={17.5} height={15.63} src={FavouriteIcon} alt="favourite icon" />
                        </div>
                    </div>
                    <div style={{
                        paddingLeft: '30px',
                        paddingRight: '30px'
                    }} className="product-description-wrapper">
                        <h1 style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '24px',
                            fontWeight: '500',
                            letterSpacing: '0.2px',
                            color: '#252B42'
                        }}>Floating Phone</h1>
                        <div className="product-price-container3">
                            <p style={{
                                color: '#737373',
                                fontWeight: '500',
                                fontSize: '24px'
                            }}>$13.33</p>
                        </div>
                        <div className="product-color-options-wrapper">
                            <div className="color-container color-one">
                            </div>
                            <div className="color-container color-two">
                            </div>
                            <div className="color-container color-three">
                            </div>
                            <div className="color-container color-four">
                            </div>
                        </div>
                        <div className="size-options-wrapper">
                            <div className="size-container">
                                <p>XL</p>
                            </div>
                            <div className="size-container">
                                <p>L</p>
                            </div>
                            <div className="size-container">
                                <p>M</p>
                            </div>
                            <div className="size-container">
                                <p>S</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product item 4 */}
                <div style={{
                    backgroundColor: '#F5F5F5'
                }} className='product-item-3-wrapper'>
                    <div className="item-image">
                        <p className="sale-chip">Sale</p>
                        <div className="favourite-icon-container">
                            <img width={17.5} height={15.63} src={FavouriteIcon} alt="favourite icon" />
                        </div>
                    </div>
                    <div style={{
                        paddingLeft: '30px',
                        paddingRight: '30px',
                    }} className="product-description-wrapper">
                        <h1 style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '24px',
                            fontWeight: '500',
                            letterSpacing: '0.2px',
                            color: '#252B42'
                        }}>Floating Phone</h1>
                        <div className="product-price-container3">
                            <p style={{
                                color: '#737373',
                                fontWeight: '500',
                                fontSize: '24px'
                            }}>$13.33</p>
                        </div>
                        <div className="product-color-options-wrapper">
                            <div className="color-container color-one">
                            </div>
                            <div className="color-container color-two">
                            </div>
                            <div className="color-container color-three">
                            </div>
                            <div className="color-container color-four">
                            </div>
                        </div>
                        <div className="size-options-wrapper">
                            <div className="size-container">
                                <p>XL</p>
                            </div>
                            <div className="size-container">
                                <p>L</p>
                            </div>
                            <div className="size-container">
                                <p>M</p>
                            </div>
                            <div className="size-container">
                                <p>S</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductItem1