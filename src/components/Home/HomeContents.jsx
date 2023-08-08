import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img from "../../Assets/referHome.jpg";

function HomeContents() {
  return (
    <div className="HomeContents">
      <div className="content">
        <h3>
          Join StudyMEDIC'S referral program, <br /> Earn & Learn with friends..
        </h3>
        <div className="loginOptions">
          {sessionStorage.getItem("token") ? (
            <>
              <Link to="/upload/details">
                <Link to="/dashboard/${id}">
                  <button className="button">Goto Dashboard</button>
                </Link>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="button">Login</button>
              </Link>
            </>
          )}

        </div>
      </div>
      <div className="imageHome">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default HomeContents;
