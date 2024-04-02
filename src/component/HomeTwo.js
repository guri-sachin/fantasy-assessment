
import React, { useEffect } from 'react';


const HomeTwo = () => {


  return (
    <div>
      <div className="container" id='c1'>
        <div className="row">
          <div className="col-12 text-left">
            <b> 🠄 Verify OTP</b>
          </div>
        </div>
        <div className="row" style={{ marginTop: "120px" }}>
          <div className="col-12 text-left">
           
            <center>
            <h4>Phone Verfication</h4> <br/>
            <h5>Verify Code</h5>
            <p>Please Check Your Message and <br/>
            enter teh Verfication code we just send you <br/>
            (+91) 12345678</p>
            

              <form action="" class="mt-5">
              <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' />
              <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(2)' />
              <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(3)' />
              <input class="otp" type="text" oninput='digitValidate(this)'onkeyup='tabChange(4)' />
            </form>
              <br/>
              <p>OTP not received ?
               <b > Resend</b></p>
            </center>
          </div>
        </div>
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-12 text-left">
           <center><a href='/HomeThree'><button className='btn btn-danger' id='c2'>Next</button></a></center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
