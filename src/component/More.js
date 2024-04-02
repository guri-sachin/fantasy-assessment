import React, { useEffect, useState } from "react";

const More = () => {
  
  return (
    <div>
      <div className="container" id="c1">
        <div
          className="row"
          style={{ height: "70px", backgroundColor: "#a70000" }}
        >
          <div className="col-12" style={{ marginTop: "10px" }}>
           
            <img
              src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            ></img>{" "}
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: "white", fontSize: "20px" }}>More</span>
          </div>
        </div>
      
        <li><i className="fa fa-home"></i> Fantasy Point System</li><hr/>
        <li><i className="fa fa-home"></i> Fantasy Self Help</li><hr/>
       <a href="/Notification" style={{textDecoration:"none",color:"black"}}> <li><i className="fa fa-home"></i> About us</li></a><hr/>
        <li><i className="fa fa-home"></i> Terms & Condition</li><hr/>
        <li><i className="fa fa-home"></i> Privacy & Policy</li><hr/>
        <li><i className="fa fa-home"></i> Contact Us</li><hr/>
        <li><i className="fa fa-home"></i> FAQ's</li><hr/>
        <li><i className="fa fa-home"></i> Legality</li><hr/>
      
        <li style={{color:"#a70000"}}><i className="fa fa-home"></i> <b>Logout</b></li>
      
      </div>
      <div className="row" style={{ height: "60px", position: "fixed", bottom: "0",margin:"0px", width: "100%", backgroundColor: "lightgray" }}>
        {/* Content of the bottom row */}
        <div className="col-3"><center><i class="fa fa-home" style={{color:"gray"}}></i><br/><a href="/HomeThree" style={{color:"black",textDecoration:"none"}}>Home</a></center></div>
        <div className="col-3"><center><i class="fa fa-trophy" style={{color:"gray"}}></i><br/><a href="/MyMatch" style={{color:"black",textDecoration:"none"}}>MyMatch</a></center></div>
           <div className="col-3"><center><i class="fa fa-mortar-board" style={{color:"gray"}}></i><br/><a href="/winner" style={{color:"black",textDecoration:"none"}}>Winner</a></center></div>
        <div className="col-3"><center><i class="fa fa-gear" style={{color:"gray"}}></i><br/><a href="/More" style={{color:"black",textDecoration:"none"}}>More</a></center></div>
      </div>
    </div>
  );
};

export default More;
