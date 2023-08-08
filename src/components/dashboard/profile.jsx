import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import './Dashboard.css'

import ModalForm from "./ModalForm";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import ProfileForm from "./ProfileForm";

function Profile(props) {
  console.log("props", props);
  const user = props?.user?.data?.user;

  if (!sessionStorage.getItem("token") || !user) {
    return (
      <div className="profileDiv">
        <div className="profile">
          <img
            src="https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"
            alt=""
          />
          <p>Name</p>
        </div>
        <div className="profileForm">
          <ProfileForm />
        </div>
      </div>
    );
  }

  const imageUrl = `${process.env.REACT_APP_BASE_URL}/uploads/${user.imageData}`.replace(/\\/g, '/').replace('/uploads/uploads/', '/uploads/');
  console.log("test", imageUrl)
  return (
    <div className="profileDiv">
      <div className="profile">
        <br />
        <div>
          <div className="profileImage">
            {user.imageData ? (
              <img src={imageUrl} alt="profile_image" />
            ) : (
              <img src="https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png" alt="" />
            )}
          </div>
          <div className="prof">
            <div className="profileDetails">
              <p style={{ textAlign: 'center' }}>
                <b>{user.fname} {user.lname}</b>
              </p>
              <p>{user.specialization}</p>
              <p><IoMdMail className="profileIcon" /> &nbsp;{user.email}</p>
              <p><FaPhoneAlt className="profileIcon" /> &nbsp;{user.phone}</p>
              <p><MdLocationPin className="profileIcon" /> &nbsp;{user.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profileForm">
        <ProfileForm />
      </div>
    </div>
  );
}


export default Profile;
