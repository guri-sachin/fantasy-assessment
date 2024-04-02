
import React, { useEffect } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';

import intlTelInput from 'intl-tel-input';

const HomeOne = () => {
  useEffect(() => {
    const input = document.querySelector('#mobile_code');
    if (input) {
      intlTelInput(input, {
        initialCountry: 'in',
        separateDialCode: true,
      });
    }
  }, []);

  return (
    <div>
      <div className="container" id='c1'>
        <div className="row">
          <div className="col-12 text-left">
            <b> 🠄 Cricket 11</b>
          </div>
        </div>
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-12 text-left">
            <center> <b style={{ color: "#a70000", fontSize: "18px" }}>Enter Your 10-digits<br />
              Mobile Number</b>
              <br />   <br />   <br />

              <div className="form-group">
                <input type="text" id="mobile_code" className="form-control" placeholder="Phone Number" name="name" style={{border:"2px solid #a70000"}} />
              </div>
              <br/>
              <p>By Clicking , I accept the<br/>
              <input type='checkbox'></input> <b style={{color:"#a70000"}}>Term of Services & Privacy<br/>and Policy</b></p>
            </center>
          </div>
        </div>
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-12 text-left">
           <center><a href='/HomeTwo'><button className='btn btn-danger' id='c2'>Next</button></a></center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOne;
