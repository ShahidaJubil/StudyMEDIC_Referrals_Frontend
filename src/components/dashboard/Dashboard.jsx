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
import {IoIosContact, IoMdContacts, IoMdLogOut} from "react-icons/io"
import { FaRegHandshake } from "react-icons/fa";
import { TfiWallet } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import Table from "./Table";
import { GiRoundTable } from "react-icons/gi";
import Header from "../Header/Header";
import Divider from '@mui/material/Divider';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = sessionStorage.getItem("uid");
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/get/` + id
        );
        setUser(response);

        //console.log("user info", response);
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
    //window.location.reload();    back to profile tab
    setLogout(true);
  }
  if (logout) {
    return <Navigate to="/" replace />; // Redirect to the home page
  }
  return (
    <div>
      <Header/>
      <Divider className="dividerHeader"/>
     
      <Grid container spacing={2}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Grid item lg={2.5} md={4} sm={12} xs={12} className="grid1">
            <Nav variant="pills" className="flex-column custom-pills">
              <Nav.Link className="mynavlink">
                <img
                  src="https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"
                  alt=""
                />
              </Nav.Link>
              <Nav.Link eventKey="first" className="mynavlink">
                <span className="taptxtleft"><IoIosContact className="DashboardIcons"/> My profile</span>
              </Nav.Link>
              <Nav.Link eventKey="third" className="mynavlink">
                <span className="taptxtleft"><FaRegHandshake className="DashboardIcons"/> Refer</span>
              </Nav.Link>
              <Nav.Link eventKey="fourth" className="mynavlink">
                <span className="taptxtleft"><IoMdContacts className="DashboardIcons"/> All Referrals</span>
              </Nav.Link>
              <Nav.Link eventKey="second" className="mynavlink">
                <span className="taptxtleft"><TfiWallet className="DashboardIcons"/> My Wallet</span>
              </Nav.Link>

              {/* <Nav.Link eventKey="seventh" className="mynavlink">
                <Link to="/">
                  <span className="taptxtleft"><AiOutlineHome className="DashboardIcons"/>Back to Home</span>
                </Link>
              </Nav.Link> */}
              <Nav.Link eventKey="seventh">
                <span className="taptxtleft" onClick={handleLogout}>
                 <IoMdLogOut  className="DashboardIcons"/> logout
                </span>
              </Nav.Link>
            </Nav>
          </Grid>
          <Grid item lg={9} md={8} sm={12} xs={12} className="grid2">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <br />
                <Profile user={user} />
              </Tab.Pane>
              <br />
              <Tab.Pane eventKey="fourth">
                <Table/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Wallet/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                {/* <h2 >Refer Now</h2> */}
                <Form />
              </Tab.Pane>
            </Tab.Content>
          </Grid>
        </Tab.Container>
      </Grid>
    </div>
  );
};

export default Dashboard;
