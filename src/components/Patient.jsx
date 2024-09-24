import React from 'react'
import "./Patient.css"
const Patient = () => {
  return (
    <div className="container">
      <h1 > Patient Information</h1>
      <form action="#">
        <div className="form first">
          <div className="details personal">
            <span className="title">Parsonal Details</span>
            <div className="fields">
              <div className="input-fields">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name " required />
              </div>
              <div className="input-fields">
                <label>Date of birth</label>
                <input type="text" placeholder="Enter your DBO" required/>
              </div>
              <div className="input-fields">
                <label>Address</label>
                <input type="text" placeholder="Enter your address" required />
              </div>
              <div className="input-fields">
                <label>Contact details</label>
                <input type="text" placeholder="Enter your contact details"required/>
              </div>
              <div className="input-fields">
                <label>Id details</label>
                <input type="text" placeholder="Enter yourId details"required/>
              </div>
              <div className="input-fields">
                <label>Email</label>
                <input type="text" placeholder="Enter your email "required/>
              </div>
              <div className="input-fields">
                <label></label>
                <input type="text" placeholder="Enter your "required/>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    
  )
};

export default Patient;
