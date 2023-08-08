import React from "react";
import "./Footer.css";
import logo from "../../Assets/studymedic-logo--header-100k.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";

function Footer() {
  const isSmallScreen = useMediaQuery("(max-width:850px)");
  return (
    <>
      <div className="Footer">
        <div className="col1">
          <ul>
            <li>
              <img src={logo} alt="" />
            </li>
            <br />
            <li>
              <h3>Locate Us</h3>
            </li>
            <h3>India</h3>
            <li>
              Door No 90 G, N.K.K Plaza Pannithadam Road, Kecheri Thrissur Pin:
              680501
            </li>
            <br />
            <Divider className="divider" />

            <h3>Kochi</h3>

            <li>
              DOOR NO CC35/1398 C3, Axis Bank CITY TOWER MKK NAIR ROAD,
              Palarivattom Junction, Kochi Ernakulam Pin: 682025
            </li>
          </ul>
        </div>
        <div className="links">
        <div className="col2">
          <ul>
            <li>
              <h3>Useful Links</h3>
              <br />
            </li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Newsletters</li>
            <li>Our Courses</li>
            <li>Partners</li>
            <li>Mobile Learning</li>
            <li>App</li>
          </ul>
        </div>
        <div className="col3">
        {isSmallScreen ? (
          <></>):(
            <>
          <br />
          <br />
          <br />
          </>
          )}
          <ul>
            <li>Career</li>
            <li>Data and Intellectual Property Policy</li>
            <li>CSR Program</li>
            <li>FAQs</li>
            <li>Events</li>
            <li>Sitemap</li>
          </ul>
        </div>
        </div>
        <div className="col4">
          <ul>
            <h3>Contact Us</h3>
            <br />
            <li>
              StudyMEDIC Academy Private Ltd. Door No 90 G, N.K.K Plaza
              Pannithadam Road, Kecheri Thrissur Pin: 680501
            </li>

            <li>+91 9094200800</li>
            <li>+447464245285</li>
            <li>+447341981539</li>
            <li>sales@studymedic.com</li>
            <li>info@studymedic.com</li>
          </ul>
        </div>
      </div>
      <div className="footerBar">
        <div>
          <p>
            Copyright © 2023 E-Learning Platform for Medical Education-
            StudyMEDIC.
          </p>
        </div>
        <div className="footerIcons">
          <ul>
            <li>
              <MdOutlineFacebook />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
            <li>
              <AiFillYoutube />
            </li>
            <li>
              <AiFillLinkedin />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
