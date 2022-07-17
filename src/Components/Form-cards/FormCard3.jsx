import React, { useState } from 'react';
import './FormCard3.css';

const FormCard3 = () => {
    const [department, setDepartment] = useState();
    const [time, setTime] = useState();

    const handleChangeDepartment = (department) => {
        setDepartment(department);
    }

    const handleChangeTime = (time) => {
        setTime(time);
    }
    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
        }} className="container">
            <div className="form-wrapper3">
                <div className="form-title-wrapper3">
                    <p style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        letterSpacing: '0.1px',
                        // fontFamily:'Montserrat',
                        color: '#252B42'
                    }}>Contact Us</p>
                    <h1 style={{
                        fontSize: '40px',
                        fontWeight: '700',
                        letterSpacing: '0.2px',
                        color: '#252B42',
                        fontFamily: 'Montserrat'
                    }}>Make an Appointment</h1>
                </div>
                <div className="form-fields-wrapper3">
                    <div className="inline-fields-container">
                        <div className="input-section3">
                            <input className="input3" placeholder="Full Name *" />
                        </div>
                        <div className="input-section3">
                            <input className="input3" placeholder="example@gmail.com" />
                        </div>
                    </div>
                    <div className="inline-fields-container">
                        <div className="input-section3">
                            <select style={{
                                backgroundColor: '#E6E6E6',
                                // paddingRight:'29px'
                            }} className="input3" placeholder="Please Select" value={department} onChange={(e) => handleChangeDepartment(e.target.value)}>
                                <option value='CSE'> CSE</option>
                                <option value='Civil'> Civil</option>
                                <option value='Mechanical'> Mechanical</option>
                            </select>
                            {/* <input className="input" placeholder="Please Select" /> */}
                        </div>
                        <div className="input-section3">
                            <select style={{
                                backgroundColor: '#E6E6E6',
                                // paddingRight:'29px'
                            }} className="input3" placeholder="Please Select" value={time} onChange={(e) => handleChangeTime(e.target.value)}>
                                <option value='4'> 4:00 Available</option>
                                <option value='5'> 5:00 Available</option>
                                <option value='6'> 6:00 Available</option>
                            </select>
                            {/* <input className="input" placeholder="4:00 Available" /> */}
                        </div>
                    </div>
                    <textarea style={{
                        overflow: 'hidden',
                        width: '537px',
                        height: '140px',
                        border: '1px solid #E6E6E6',
                        fontSize: '14px',
                        fontWeight: '600',
                        letterSpacing: '0.2px',
                        paddingTop: '16px',
                        paddingLeft: '26px',
                        color: '#737373',
                        outline: 'none',
                        backgroundColor: '#E6E6E6'
                    }} className="text-area" placeholder="Message" />
                </div>
                <div className="button-wrapper3">
                    <button className="button3">Book Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default FormCard3