import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import useMediaQuery from "@mui/material/useMediaQuery";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { Divider } from "@mui/material";

function Header() {
  const isSmallScreen = useMediaQuery("(max-width:1200px)");
  const [isDownloadsOpen, setDownloadsOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);

  // Function to toggle the Downloads dropdown's visibility
  const toggleDownloads = () => {
    setDownloadsOpen(!isDownloadsOpen);
  };

  // Function to toggle the Courses dropdown's visibility
  const toggleCourses = () => {
    setCoursesOpen(!isCoursesOpen);
  };

  // Function to toggle the About dropdown's visibility
  const toggleAbout = () => {
    setAboutOpen(!isAboutOpen);
  };

  return (
    <div className="HeaderMain">
      <div className="row2">
        <img src={logo} alt="" />

        {isSmallScreen ? (
          <>
            <button
              className="uk-button uk-button-default"
              type="button"
              uk-toggle="target: #offcanvas-overlay"
            >
              <ViewHeadlineIcon className="menuIcon" />
            </button>

            <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
              <div className="uk-offcanvas-bar">
                <IoMdClose
                  className="uk-offcanvas-close"
                  
                  uk-close
                />

                <h3>Title</h3>
                <ul>
                  <span>
                    <a href="https://studymedic.com/friendship-day/">Home</a>
                  </span>
                  <li>
                    <div className="dropdown">
                      <span onClick={toggleAbout}>
                        About <IoIosArrowDown />
                      </span>

                      {/* Show the dropdown content based on the state */}
                      {isAboutOpen && (
                        <div className="dropdown-content">
                          <br />
                          
                            <span className="dropdownPost">
                              <a href="https://studymedic.com/about-us/" target="_blank" rel="noreferrer noopener">
                                {" "}
                                About Us
                              </a>
                            </span>
                         
                          <br />
                          
                            <span className="dropdownPost">
                              <a href="https://studymedic.com/mentors/"target="_blank" rel="noreferrer noopener">
                                
                                Mentors
                              </a>
                            </span>
                         
                          <br />
                          
                            <span className="dropdownPost">
                              <a href="https://studymedic.com/csr-program/"target="_blank" rel="noreferrer noopener">
                                CSR Program
                              </a>
                            </span>
                         
                          <br />
                          
                            <span className="dropdownPost">
                              <a href="https://studymedic.com/career/"target="_blank" rel="noreferrer noopener">Career</a>
                            </span>
                         
                          <br />
                          
                            <span className="dropdownPost">
                              <a href="https://studymedic.com/partners/"target="_blank" rel="noreferrer noopener">
                                Partners
                              </a>
                            </span>
                         
                        </div>
                      )}
                    </div>
                  </li>
                  <li>
                    <a href="https://studymedic.com/contact-us/"target="_blank" rel="noreferrer noopener">Contact Us</a>
                  </li>

                  <li>
                    <div className="dropdown">
                      <span onClick={toggleDownloads}>
                        Downloads <IoIosArrowDown />
                      </span>

                      {/* Show the dropdown content based on the state */}
                      {isDownloadsOpen && (
                        <div className="dropdown-content">
                          <br />
                          
                            <span className="dropdownPost">
                              <a href="https://studymedic.com/magazine/"target="_blank" rel="noreferrer noopener">
                                {" "}
                                Magazines
                              </a>
                            </span>
                         
                          <br />
                          
                            <span className="dropdownPost">
                              <a href="https://studymedic.com/brochures/"target="_blank" rel="noreferrer noopener">
                                {" "}
                                E Brouchures
                              </a>
                            </span>
                         
                          <br />
                          
                            <span className="dropdownPost">
                              <a href="https://studymedic.com/mobile-learning-app/"target="_blank" rel="noreferrer noopener">
                                {" "}
                                Mobile Learning App
                              </a>
                            </span>
                         
                        </div>
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <span onClick={toggleCourses}>
                        Courses <IoIosArrowDown />
                      </span>
                      {/* Show the dropdown content based on the state */}
                      {isCoursesOpen && (
                        <span className="tableRow">
                          <div className="dropdown-content">
                            <br />
                            <table>
                              <h4> &nbsp; &nbsp; &nbsp;<b> Our Courses</b></h4>
                              <tr>
                                <li>
                                  <a href="https://study-mrcog.com/"target="_blank" rel="noreferrer noopener">- MRCOG</a>
                                  <Divider className="divider" />
                                </li>
                                <li>
                                  <a href="https://studyfrcs.com/"target="_blank" rel="noreferrer noopener">- FRCS</a>
                                  <Divider />
                                </li>
                                <li>
                                  <a href="https://studyplab.com/"target="_blank" rel="noreferrer noopener">- PLAB</a>
                                  <Divider />
                                </li>
                                <li>
                                  <a href="https://study-ultrasound.com/"target="_blank" rel="noreferrer noopener">- Ultrasound</a>
                                  <Divider />
                                </li>
                              </tr>
                              <tr>
                                <li>
                                  <a href="https://studyefog.com/"target="_blank" rel="noreferrer noopener">- EFOG-EBCOG</a>
                                  <Divider />
                                </li>
                                <li>
                                  <a href="https://studyneetss.com/"target="_blank" rel="noreferrer noopener">- NEETSS</a>
                                  <Divider />
                                </li>
                                <li>
                                  <a href="https://studyrepro.com/"target="_blank" rel="noreferrer noopener">- REPRO</a>
                                  <Divider />
                                </li>
                                <li>
                                  <a href="https://www.studymrcs.org/"target="_blank" rel="noreferrer noopener">- MRCS</a>
                                  <Divider />
                                </li>
                              </tr>
                              <tr>
                                <li>
                                  <a href="https://studymrcpi.com/"target="_blank" rel="noreferrer noopener">- MRCPI</a>
                                  <Divider />
                                </li>
                                <td>
                              <a href="https://studyvaginalsurgery.com/"target="_blank" rel="noreferrer noopener">- Vaginal Surgery</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyhro.com/"target="_blank" rel="noreferrer noopener">- HRO</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studymrcem.com/"target="_blank" rel="noreferrer noopener">- MRCEM</a>
                              <Divider />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://study-fcps.com/"target="_blank" rel="noreferrer noopener">- FCPS</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyobg.com/"target="_blank" rel="noreferrer noopener">- OBG</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyfmge.com/"target="_blank" rel="noreferrer noopener">- FMGE</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studymrcp.com/"target="_blank" rel="noreferrer noopener">- MRCP</a>
                              <Divider />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://studyfrcr.com/"target="_blank" rel="noreferrer noopener">- FRCR</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyoet.com/"target="_blank" rel="noreferrer noopener">- OET</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studymrcpch.com/"target="_blank" rel="noreferrer noopener">- MRCPCH</a>
                              <Divider />
                            </td>
                              </tr>
                            </table>
                          </div>
                        </span>
                      )}
                    </div>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="menu">
            <ul>
              <li>
                <a href="https://studymedic.com/friendship-day/">Home</a>
              </li>
              <li>
                <div className="dropdown">
                  <span onClick={toggleAbout}>
                    About
                    <IoIosArrowDown />
                  </span>

                  {/* Show the dropdown content based on the state */}
                  {isAboutOpen && (
                    <div className="dropdown-content">
                      <br />
                     
                        <span className="dropdownPost">
                          <a href="https://studymedic.com/about-us/"target="_blank" rel="noreferrer noopener">
                            {" "}
                            About us{" "}
                          </a>
                        </span>
                      
                      <br />
                      
                        <span className="dropdownPost">
                          <a href="https://studymedic.com/mentors/"target="_blank" rel="noreferrer noopener"> Mentors</a>
                        </span>
                     
                      <br />
                      
                        <span className="dropdownPost">
                          <a href="https://studymedic.com/csr-program/"target="_blank" rel="noreferrer noopener">
                            CSR Program
                          </a>
                        </span>
                     
                      <br />
                      
                        <span className="dropdownPost">
                          <a href="https://studymedic.com/career/"target="_blank" rel="noreferrer noopener">Career</a>
                        </span>
                     
                      <br />
                      
                        <span className="dropdownPost">
                          <a href="https://studymedic.com/partners/"target="_blank" rel="noreferrer noopener">Partners</a>
                        </span>
                     
                    </div>
                  )}
                </div>
              </li>

              <li>
                <div className="dropdown">
                  <span onClick={toggleCourses}>
                    Courses <IoIosArrowDown />
                  </span>

                  {/* Show the dropdown content based on the state */}
                  {isCoursesOpen && (
                    <span className="tableRow">
                      <div className="dropdown-content">
                        <br />
                        <table>
                          <h4> &nbsp; &nbsp; &nbsp;<b> Our Courses</b></h4>
                          <tr>
                            <td>
                              <a href="https://study-mrcog.com/"target="_blank" rel="noreferrer noopener">- MRCOG</a>
                              <Divider className="divider" />
                            </td>
                            <td>
                              <a href="https://studyfrcs.com/"target="_blank" rel="noreferrer noopener">- FRCS</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyplab.com/"target="_blank" rel="noreferrer noopener">- PLAB</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://study-ultrasound.com/"target="_blank" rel="noreferrer noopener">- Ultrasound</a>
                              <Divider />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://studyefog.com/"target="_blank" rel="noreferrer noopener">- EFOG-EBCOG</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyneetss.com/"target="_blank" rel="noreferrer noopener">- NEETSS</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyrepro.com/"target="_blank" rel="noreferrer noopener">- REPRO</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://www.studymrcs.org/"target="_blank" rel="noreferrer noopener">- MRCS</a>
                              <Divider />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://studymrcpi.com/"target="_blank" rel="noreferrer noopener">- MRCPI</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyvaginalsurgery.com/"target="_blank" rel="noreferrer noopener">- Vaginal Surgery</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyhro.com/"target="_blank" rel="noreferrer noopener">- HRO</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studymrcem.com/"target="_blank" rel="noreferrer noopener">- MRCEM</a>
                              <Divider />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://study-fcps.com/"target="_blank" rel="noreferrer noopener">- FCPS</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyobg.com/"target="_blank" rel="noreferrer noopener">- OBG</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyfmge.com/"target="_blank" rel="noreferrer noopener">- FMGE</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studymrcp.com/"target="_blank" rel="noreferrer noopener">- MRCP</a>
                              <Divider />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://studyfrcr.com/"target="_blank" rel="noreferrer noopener">- FRCR</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studyoet.com/"target="_blank" rel="noreferrer noopener">- OET</a>
                              <Divider />
                            </td>
                            <td>
                              <a href="https://studymrcpch.com/"target="_blank" rel="noreferrer noopener">- MRCPCH</a>
                              <Divider />
                            </td>
                          </tr>
                        </table>
                      </div>
                    </span>
                  )}
                </div>
              </li>

              <li>
                <div className="dropdown">
                  <span onClick={toggleDownloads}>
                    Downloads <IoIosArrowDown />
                  </span>

                  {/* Show the dropdown content based on the state */}
                  {isDownloadsOpen && (
                    <div className="dropdown-content">
                      <br />
                      
                        <span className="dropdownPost">
                          <a href="https://studymedic.com/magazine/"target="_blank" rel="noreferrer noopener">
                            {" "}
                            Magazines
                          </a>
                        </span>
                     
                      <br />
                      
                        <span className="dropdownPost">
                          <a href="https://studymedic.com/brochures/"target="_blank" rel="noreferrer noopener">
                            {" "}
                            E Brouchures
                          </a>
                        </span>
                     
                      <br />
                      
                        <span className="dropdownPost">
                          <a href="https://studymedic.com/mobile-learning-app/"target="_blank" rel="noreferrer noopener">
                            {" "}
                            Mobile Learning App
                          </a>
                        </span>
                     
                    </div>
                  )}
                </div>
              </li>
              <li>
                <a href="https://studymedic.com/contact-us/"target="_blank" rel="noreferrer noopener">Contact Us</a>
              </li>
              {/* {sessionStorage.getItem("token") ? (
              <>
                <Link to="/upload/details">
                  <Link to="/dashboard/${id}">
                    <IoMdContact className="profileIcon" />
                 
               
              </>
            ) : (
              <>
              </>
            )}  */}
              {/* 
                <div className="dropdown">
                  <span>
                    LOGIN <IoIosArrowDown />
                  </span>

                  <div className="dropdown-content">
                    <br />
                    
                      <span className="dropdownPost"> Mentor Login</span>
                   
                    <br />
                    <Link to="/login/student">
                      <span className="dropdownPost">Students Login</span>
                   
                    <br />
                    <Link to="/login/guest  ">
                      <span className="dropdownPost">Guest Login</span>
                   
                  </div>
                </div>
              </>
            )} */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
