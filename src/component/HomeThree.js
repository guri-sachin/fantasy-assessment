import React, { useState } from "react";

const HomeThree = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="container" id="c1">
        <div
          className="row"
          style={{ height: "80px", backgroundColor: "#a70000" }}
        >
          <div className="col-7 text-left"></div>
          <div className="col-5">
            <br />
            <i class="fa fa-bell"></i>
            <i class="fa fa-credit-card"></i>
          </div>
        </div>
        <br />
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://www.techugo.com/blog/wp-content/uploads/2019/06/Everything-You-Need-To-Know-About-Fantasy-Cricket-Apps.png"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDT6hKVoxuFmLpsInf8qj1HFCTWXOGhNQ3f-P-3Sm6dem1tpO5ko9bAD00RlhypHIG38&usqp=CAU"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://www.imgglobalinfotech.com/imgadmin2/images/blog/blogimageOn-Demand-Fantasy-Cricket-app-Features-And-Cost-.webp"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-8">
            <b>Upcoming Matches</b>
          </div>
          <div className="col-4">
            <button className="btn btn-outline-danger">
              <i className="fa fa-filter"> </i>&nbsp;<b>Filter</b>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="matchcard">
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-6" style={{ fontSize: "small" }}>
                {" "}
                &nbsp;Icc Cricket World Cup
              </div>
              <div className="col-6">
                <i className="fa fa-clock-o" style={{ color: "green" }}>
                  &nbsp;&nbsp;Lineup's out
                </i>
                &nbsp;&nbsp;
                <i
                  className="fa fa-bell"
                  style={{ color: "black", margin: "0px" }}
                ></i>
              </div>
            </div>
            <hr />
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-4">
                <center>Pakistan</center>
                <img
                  src="https://media.istockphoto.com/id/1347332330/vector/pakistan-3d-rounded-country-flag-button-icon.jpg?s=612x612&w=0&k=20&c=ASkdAdJEWh0RGgHzB8hFxCmZVn8PGBKskRsq2H4EvXc="
                  className="img"
                ></img>
              </div>

              <div className="col-4">
                <span>
                  <b style={{ color: "#a70000" }}>
                    <br />
                    <br />
                    Fri, 13 Aug
                  </b>
                </span>
              </div>
              <div className="col-4">
                <center>India</center>
                <img
                  src="https://media.istockphoto.com/id/1471401435/vector/round-icon-of-indian-flag.jpg?s=612x612&w=0&k=20&c=kXy7vTsyhEycfrQ9VmI4FpfBFX2cMtQP5XIvTdU8xDE="
                  className="img"
                ></img>
              </div>
            </div>
            <div
              className="row"
              style={{
                height: "50px",
                backgroundColor: "lightgray",
                margin: "0px",
                width: "100%",
              }}
            >
              <div className="col-8">
                <center>
                  <button className="btn btn-danger" style={{ margin: "5px" }}>
                    Mega
                  </button>
                  <b> ₹ 2 Lakhs</b>
                </center>
              </div>
              <div className="col-4">
                <i
                  class="fa fa-television"
                  style={{ margin: "8px", fontSize: "21px" }}
                ></i>
                &nbsp;{" "}
                <i
                  class="fa fa-clock-o"
                  style={{ margin: "8px", fontSize: "21px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* Content of the sidebar */}
        <div style={{ height: "100px", backgroundColor: "#a70000" }}>
          <span>
            <i
              className="fa fa-remove"
              style={{
                cursor: "pointer",
                float: "right",
                color: "white",
                margin: "10px",
              }}
              onClick={toggleSidebar}
            ></i>
          </span>
          <br />
          <div className="row">
            <div className="col-12">
              {" "}
              <span
                style={{ color: "white", fontSize: "30px", marginTop: "15px" }}
              >
                🠄
              </span>
              <img
                src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg"
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              ></img>{" "}
              <span style={{ color: "white", fontSize: "20px" }}>
                Amit Shah{" "}
              </span>
              <a href="/Profile">
                {" "}
                <p
                  style={{
                    marginLeft: "70px",
                    fontSize: "12px",
                    marginTop: "-15px",
                    color: "white",
                  }}
                >
                  Go to profile
                </p>
              </a>
            </div>
          </div>
          <br/>
          <li>
            <i className="fa fa-home"></i> Home
          </li>
          <hr />
          <li>
            <i className="fa fa-home"></i> Join/Create Contest
          </li>
          <hr />
          <a
            href="/Notification"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <li>
              <i className="fa fa-home"></i> Notification
            </li>
          </a>
          <hr />
          <li>
            <i className="fa fa-home"></i> Wallets
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger">Add Cash</button>
          </li>
          <hr />
          <li>
            <i className="fa fa-home"></i> Refer & Earn
          </li>
          <hr />
          <li>
            <i className="fa fa-home"></i> Offer & Program
          </li>
          <hr />
          <li>
            <i className="fa fa-home"></i> Theme
          </li>
          <hr />
          <li style={{ color: "#a70000" }}>
            <i className="fa fa-home"></i> Logout
          </li>
          <hr />
          <br />   <br />   <br />   <br />   <br />   <br />
          <div className="row">
            <h5 style={{ marginLeft: "30px" }}>
              <b>Follow Us :</b>
            </h5>
            <br />
            <div className="col-3"></div>
            <div className="col-3">
              <img
                src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png"
                style={{ height: "30px", width: "30px" }}
              ></img>
            </div>
            <div className="col-3">
              <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                style={{ height: "30px", width: "30px" }}
              ></img>
            </div>
            <div className="col-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                style={{ height: "30px", width: "30px" }}
              ></img>
            </div>
            <div className="col-3">
              <img
                src="https://w7.pngwing.com/pngs/704/270/png-transparent-social-media-instagram-login-graphy-ig-instagram-icon-rectangle-magenta-mobile-phones-thumbnail.png"
                style={{ height: "30px", width: "30px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* Bar Icon */}
      <div
        className="bar-icon"
        onClick={toggleSidebar}
        style={{
          position: sidebarOpen ? "absolute" : "fixed",
          top: 20,
          left: 20,
        }}
      >
        <i className="fa fa-bars">
          {" "}
          <b>
            <span style={{ color: "white" }}>&nbsp;&nbsp; Matches</span>
          </b>
        </i>
      </div>
      <div
        className="row"
        style={{
          height: "60px",
          position: "fixed",
          bottom: "0",
          margin: "0px",
          width: "100%",
          backgroundColor: "lightgray",
        }}
      >
        {/* Content of the bottom row */}
        <div className="col-3">
          <center>
            <i class="fa fa-home" style={{ color: "gray" }}></i>
            <br />
            <a
              href="/HomeThree"
              style={{ color: "black", textDecoration: "none" }}
            >
              Home
            </a>
          </center>
        </div>
        <div className="col-3">
          <center>
            <i class="fa fa-trophy" style={{ color: "gray" }}></i>
            <br />
            <a
              href="/MyMatch"
              style={{ color: "black", textDecoration: "none" }}
            >
              MyMatch
            </a>
          </center>
        </div>
        <div className="col-3">
          <center>
            <i class="fa fa-mortar-board" style={{ color: "gray" }}></i>
            <br />
            <a
              href="/winner"
              style={{ color: "black", textDecoration: "none" }}
            >
              Winner
            </a>
          </center>
        </div>
        <div className="col-3">
          <center>
            <i class="fa fa-gear" style={{ color: "gray" }}></i>
            <br />
            <a href="/More" style={{ color: "black", textDecoration: "none" }}>
              More
            </a>
          </center>
        </div>
      </div>
    </div>
  );
};

export default HomeThree;
