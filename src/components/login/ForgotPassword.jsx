import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import img from "../../Assets/forgot.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the backend to handle the "Forgot Password" request
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/forgot-password`,
        {
          email: email,
          newPassword: newPassword,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Forgot Password Error:", error);
      setMessage("Error occurred. Please try again later.");
    }
  };

  return (
    <div className="forgotMain">
      <div className="forgotSub">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div>
          <h3>
            <b> Forgot Password</b>
          </h3>

          <form onSubmit={handleSubmit}>
            <div>
              <legend className="uk-legend">Email</legend>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="email"
                  placeholder="Email"
                  aria-label="Input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <legend className="uk-legend">New Password</legend>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="password"
                  placeholder="Password"
                  aria-label="Input"
                  value={newPassword}
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <legend className="uk-legend">Confirm Password</legend>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="password"
                  placeholder="Password"
                  aria-label="Input"
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="resetButton">
              Reset Password
            </button>
        
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Link to="/" style={{ color: "#23BDB8", fontWeight: "600", fontSize:'13px' }}>
              Back to Login
              </Link>
        
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
