import React, { useEffect, useState } from "react";

const Profile = () => {
    const[profile,setProfile]=useState(true);
    const[match,setMatch]=useState(false);
    const[wallet,setWallet]=useState(false);
    function p1(){
        setProfile(true);
        setMatch(false);
        setWallet(false);
    }
    function p2(){
        setProfile(false);
        setMatch(true);
        setWallet(false);
    }
    function p3(){
        setProfile(false);
        setMatch(false);
        setWallet(true);
    }
  return (
    <div>
      <div className="container" id="c1">
        <div
          className="row"
          style={{ height: "70px", backgroundColor: "#a70000" }}
        >
          <div className="col-12" style={{ marginTop: "10px" }}>
            <span
              style={{ color: "white", fontSize: "30px", marginTop: "15px" }}
            >
              🠄
            </span>
            &nbsp;&nbsp;
            <img
              src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            ></img>{" "}
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: "white", fontSize: "20px" }}>Amit Shah </span>
          </div>
        </div>
        <div
          className="row"
          style={{ height: "30px", backgroundColor: "#a70000", color: "white" }}
        >
          <div className="col-4" onClick={p1} style={{cursor:"pointer"}}>My Details</div>
          <div className="col-4"onClick={p2} style={{cursor:"pointer"}}>Matches</div>
          <div className="col-4"onClick={p3} style={{cursor:"pointer"}}>Wallets</div>
        </div><br/>

        {/* {profile} */
        }{
            profile &&
      <>     
         <div className="row" >
          <div className="col-6">Name</div> <div className="col-6">Gurdeep</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-6">Email</div> <div className="col-6">xyz@gmail.com</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-6">Mobile No</div> <div className="col-6">46464646</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-6">Date Of Birth</div> <div className="col-6">07/12/1999</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-6">Gender</div> <div className="col-6">Male</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-6">Country</div> <div className="col-6">India</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-6">State</div> <div className="col-6">Hariyana</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-6">City</div> <div className="col-6">Sirsa</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-12" style={{fontWeight:"bold",color:"#a70000"}}><i class="fa fa-sign-out"></i> &nbsp;Logout</div> {" "}
        </div> </>
 }
 {match && <>
    <div className="row" >
          <div className="col-8">Contest</div> <div className="col-4">40</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-8">Matches</div> <div className="col-4">20</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-8">Series</div> <div className="col-4">10</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-8">Wins</div> <div className="col-4">3</div>{" "}
        </div>
 </>}
 {wallet && <>
    <div className="row" >
          <div className="col-8">My Balance</div> <div className="col-4">₹ 900</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-8">Deposite</div> <div className="col-4">₹ 20</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-5">Winning</div> <div className="col-7"><button className="btn btn-danger">Withdraw</button>&nbsp;&nbsp;₹ 100</div>{" "}
        </div><hr/>
        <div className="row">
          <div className="col-8">Bonus</div> <div className="col-4">3</div>{" "}
        </div><br/>
        <div className="row" style={{height:"50px",backgroundColor:"lightgrey"}}>
            <div className="col-8"><center style={{color:"#a70000",fontWeight:"bold",fontSize:"25px"}}>My Transation</center></div>   <div className="col-4">
                <i style={{color:"#a70000",fontWeight:"bold",fontSize:"33px"}} className="fa fa-angle-right"></i>
            </div>
        </div>
 </>}
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

export default Profile;
