import React, { useState } from 'react';
import FormImage from '../../Images/formImage.png';
import './FormCard1.css';

const FormCard1 = () => {

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
            display:'flex',
            height:'100vh',
            alignItems:'center',
            justifyContent:'center'
        }} className="container">
            <h1>Form cards</h1>
            <div className="form-card-wrapper">
                <div style={{
                    backgroundImage: `url(${FormImage})`,
                    width: '267px',
                    height: '616px',
                    backgroundSize: 'cover',
                    borderTopLeftRadius:'20px',
                    borderBottomLeftRadius:'20px'
                }} className="form-image-wrapper">
                </div>
                <div className="form-wrapper">
                    <div className="form-title-wrapper">
                        <h1 style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            letterSpacing: '0.1px',
                            color: '#252B42'
                        }}>Book Appointment</h1>
                    </div>
                    <div className="form-fields-wrapper">
                        <div className="input-section">
                            <p className="input-title">Name *</p>
                            <input className="input" placeholder="Full Name *" />
                        </div>
                        <div className="input-section">
                            <p className="input-title">Email address *</p>
                            <input className="input" placeholder="example@gmail.com" />
                        </div>
                        <div className="input-section">
                            <p className="input-title">Department*</p>
                            <select className="input" placeholder="Please Select" value={department} onChange={(e) => handleChangeDepartment(e.target.value)}>
                                <option value='CSE'> CSE</option>
                                <option value='Civil'> Civil</option>
                                <option value='Mechanical'> Mechanical</option>
                            </select>
                            {/* <input className="input" placeholder="Please Select" /> */}
                        </div>
                        <div className="input-section">
                            <p className="input-title">Time*</p>
                            <select className="input" placeholder="Please Select" value={time} onChange={(e) => handleChangeTime(e.target.value)}>
                                <option value='4'> 4:00 Available</option>
                                <option value='5'> 5:00 Available</option>
                                <option value='6'> 6:00 Available</option>
                            </select>
                            {/* <input className="input" placeholder="4:00 Available" /> */}
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button className="button">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCard1