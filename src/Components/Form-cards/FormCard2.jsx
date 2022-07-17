import React,{useState} from 'react'
import './FormCard2.css';

const FormCard2 = () => {
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
            
            <div className="form-wrapper2">
                <div className="form-title-wrapper2">
                    <h1 style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        letterSpacing: '0.1px',
                        color: '#252B42',
                        width:'233px'
                    }}>Book Appointment</h1>
                </div>
                <div className="form-fields-wrapper2">
                    <div className="input-section2">
                        <p className="input-title2">Name *</p>
                        <input className="input2" placeholder="Full Name *" />
                    </div>
                    <div className="input-section2">
                        <p className="input-title2">Email address *</p>
                        <input className="input2" placeholder="example@gmail.com" />
                    </div>
                    <div className="input-section2">
                        <p className="input-title2">Department*</p>
                        <select style={{
                            backgroundColor: 'white',
                            // paddingRight:'29px'
                        }} className="input2" placeholder="Please Select" value={department} onChange={(e) => handleChangeDepartment(e.target.value)}>
                            <option value='CSE'> CSE</option>
                            <option value='Civil'> Civil</option>
                            <option value='Mechanical'> Mechanical</option>
                        </select>
                        {/* <input className="input" placeholder="Please Select" /> */}
                    </div>
                    <div className="input-section2">
                        <p className="input-title2">Time*</p>
                        <select style={{
                            backgroundColor: 'white',
                            // paddingRight:'29px'
                        }} className="input2" placeholder="Please Select" value={time} onChange={(e) => handleChangeTime(e.target.value)}>
                            <option value='4'> 4:00 Available</option>
                            <option value='5'> 5:00 Available</option>
                            <option value='6'> 6:00 Available</option>
                        </select>
                        {/* <input className="input" placeholder="4:00 Available" /> */}
                    </div>
                </div>
                <div className="button-wrapper2">
                    <button className="button2">Book Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default FormCard2