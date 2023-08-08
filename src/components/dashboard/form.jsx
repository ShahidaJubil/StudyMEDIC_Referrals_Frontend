import axios from "axios";
import React, { useState } from "react";
import { FaRegCopy, FaWhatsapp } from "react-icons/fa";
import "./Dashboard.css";
import video from "../../Assets/BG-video.mp4";
import { writeText } from "clipboard-polyfill";
import Notification from "./Notification";



function Form() {
  const [referralLink, setReferralLink] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
                                                              //Refer page--------------------------------
  const handleGenerateLink = async () => {
    try {
      const id = sessionStorage.getItem("uid");
      const response = await axios.get( `${process.env.REACT_APP_BASE_URL}/api/get/` + id);
      setReferralLink(response.data.user.referralLink);
      // console.log("referral link", response.data.user.referralLink);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleCopy = () => {
    if (referralLink) {
      writeText(referralLink)
        .then(() => {
          setShowNotification(true);
        })
        .catch((error) => {
          console.log("Clipboard copy failed:", error);
        });
    }
  };

  const handleWhatsAppShare = () => {
    if (referralLink) {
      const encodedMessage = encodeURIComponent(referralLink);
      const shareUrl = `https://wa.me/?text=${encodedMessage}`;
      window.open(shareUrl, "_blank");
    }
  };


  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <h3>
        <b> Refer your friend</b>
      </h3>
      {showNotification && (
        <Notification
          message="Referral link copied! "
          onClose={handleNotificationClose}
        />
      )}
      {referralLink ? (
        <div className="linkDiv">
           <div className="referralLinkWrapper">
          <p>{referralLink}</p>
          </div>
          {/* <button  className='LinkButton'>Copy Link </button> */}
          <div onClick={handleCopy}>
            <FaRegCopy className="copy" /> &nbsp;<span> Copy your link</span>
          </div>
          <br />
          <div onClick={handleWhatsAppShare}>
            <FaWhatsapp className="whatsappShareButton" /> &nbsp;
            <span> Share through WhatsApp</span>
          </div>
        </div>
      ) : (
        <button onClick={handleGenerateLink} className="LinkButton">
          Generate Referral Link
        </button>
      )}

      <div className="referContent">
        <div className="contentPoints">
          <h4>
            <b>Instructions</b>
          </h4>
          <ul>
            <li>Click on the button to generate your referral link.</li>

            <li>Referral link contains your referral code.</li>

            <li>Share the link on social media or wherever possible.</li>

            <li>
              For every sale from your referrals, reward points will be added to
              your dashboard.
            </li>
          </ul>
        </div>
        <div className="referVideo">
          <h4>
            <br />
            <b>How This Works</b>
          </h4>
          <video
            src={video}
            type="video/mp4"
            loop
            controls
            className="referVideo"
            // style={{
            //  height:'20rem'
            // }}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
