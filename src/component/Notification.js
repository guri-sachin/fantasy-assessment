import React from "react";

const Notification = () => {
  return (
    <div>
      <div className="container" id="c1">
        <div
          className="row"
          style={{ height: "60px", backgroundColor: "#a70000" }}
        >
          <div className="col-12" style={{ marginTop: "10px" }}>
            <span
              style={{ color: "white", fontSize: "25px", marginTop: "15px" }}
            >
              🠄 &nbsp; &nbsp;Notification
            </span>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-3">
            <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "#a70000",
                borderRadius: "50%",
              }}
            >
              <i
                className="fa fa-star"
                style={{ color: "white", fontSize: "40px", margin: "5px" }}
              ></i>{" "}
            </div>
          </div>
          <div className="col-9">
            {" "}
            Succes ! you are create a team
            <br />
            IND Vs PAK match
            <br />
            <p> 02 Aug 2023</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "#a70000",
                borderRadius: "50%",
              }}
            >
              <i
                className="fa fa-star"
                style={{ color: "white", fontSize: "40px", margin: "5px" }}
              ></i>{" "}
            </div>
          </div>
          <div className="col-9">
            {" "}
            Succes ! you are create a team
            <br />
            IND Vs PAK match
            <br />
            <p> 02 Aug 2023</p>
          </div>
        </div>
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

export default Notification;
