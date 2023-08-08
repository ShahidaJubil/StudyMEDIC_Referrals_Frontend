import React, { useEffect, useState } from "react";
import Form from "./form";
import Grid from "@mui/material/Grid";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "./Dashboard.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Profile from "./profile";
import Wallet from "./Wallet";
import { IoIosArrowDown } from "react-icons/io";

const GroupDashboard = () => {
  const [user, setUser] = useState(null);
  const [logout, setLogout] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [numberOfStudents, setNumberOfStudents] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = sessionStorage.getItem("uid");
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/profile/` + id
        );
        setUser(response);

        console.log("user info", response);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("hid");
    setLogout(true);
  }

  function handleNumberClick(number) {
    setNumberOfStudents(number);
    setShowForm(true);
  }

  if (logout) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Grid item lg={2.8} md={4} sm={12} xs={12} className="grid1">
            <Nav variant="pills" className="flex-column custom-pills">
              <Nav.Link className="mynavlink">
                <img
                  src="https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"
                  alt=""
                />
              </Nav.Link>
              <Nav.Link eventKey="first" className="mynavlink">
                <span className="taptxtleft">My profile</span>
              </Nav.Link>
              <Nav.Link eventKey="third" className="mynavlink">
                <span className="taptxtleft">Refer</span>
              </Nav.Link>
              <Nav.Link eventKey="second" className="mynavlink">
                <span className="taptxtleft">My Wallet</span>
              </Nav.Link>
              <br />
              <br />
              <Nav.Link eventKey="seventh" className="mynavlink">
                <Link to="/">
                  <span className="taptxtleft">Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="seventh">
                <span className="taptxtleft" onClick={handleLogout}>
                  logout
                </span>
              </Nav.Link>
            </Nav>
          </Grid>
          <Grid
            item
            lg={9.2}
            md={8}
            sm={12}
            xs={12}
            className="grid2"
            style={{ height: "100vh", overflowY: "scroll" }}
          >
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <br />
                <Profile user={user} />
              </Tab.Pane>
              <br />
              <Tab.Pane eventKey="second">
                <Wallet />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h2 style={{ textAlign: "center" }}>Refer Now</h2>
                <br />
                <br />
                <div className="forms">
                  <div className="uk-inline">
                    <div>
                      <button
                        className="uk-button uk-button-default"
                        type="button"
                      >
                        Choose number of students &nbsp;&nbsp;&nbsp;&nbsp;
                        <IoIosArrowDown />
                      </button>
                      <div uk-dropdown="mode: click">
                        <button
                          onClick={() => handleNumberClick(1)}
                          className="dropdownGroup"
                        >
                          1{" "}
                        </button>
                        <br />
                        <br />
                        <button
                          onClick={() => handleNumberClick(2)}
                          className="dropdownGroup"
                        >
                          2{" "}
                        </button>
                        <br />
                        <br />
                        <button
                          onClick={() => handleNumberClick(3)}
                          className="dropdownGroup"
                        >
                          3{" "}
                        </button>
                        <br />
                        <br />
                        <button
                          onClick={() => handleNumberClick(4)}
                          className="dropdownGroup"
                        >
                          4{" "}
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div>Number of referrals: 3</div>
                </div>
                {showForm && (
                  <div>
                    {Array.from({ length: numberOfStudents }).map(
                      (_, index) => (
                        <Form key={index} />
                      )
                    )}
                  </div>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Grid>
        </Tab.Container>
      </Grid>
    </div>
  );
};

export default GroupDashboard;
