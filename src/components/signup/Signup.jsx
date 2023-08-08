import React, { useState } from "react";
import "../login/login.css";
import Axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const base_url = `${process.env.REACT_APP_BASE_URL}/api/signup`

function Signup() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const formValues = { password, email, confirmPassword };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(formValues);
    console.log("Errors", errors);
    setFormErrors(errors);

    // If there are form errors, stop the submission process
    if (Object.keys(errors).length !== 0) {
      return;
    }
    Axios.post(
      base_url,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json', // Set the request content type
          // Add any other required headers if necessary
        }
      }
    )
      .then((res) => {
        console.log("response", res);
        setResponse("Success");
        navigate("/");
        return res.data;
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          // setFormErrors({ email: "This email is already registered" });
          toast.warning("This email is already registered");
        } else {
          console.error(error);
        }
        console.log("Login error:", error);
      });
  };

  // Get authenticated user data function

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (formDatas) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formDatas.email) {
      errors.email = "Email required";
      toast.warning("Please enter your email");
    } else if (!regex.test(formDatas.email)) {
      toast.warning("This is not a valid email format!")
    }
    if (!formDatas.password) {
      errors.password = "Password required";
      toast.warning("Please enter your password");

    }
    if (!formDatas.confirmPassword) {
      errors.noConfirmPassword = "Re-enter your password";
      toast.warning("Re-enter your password");
    } else if (formDatas.confirmPassword !== formDatas.password) {
      errors.confirmPassword = "Passwords do not match";
      toast.warning("Passwords do not match");
    }
    return errors;
  };
  console.log("form values", formValues);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <div className="MentorLogin">
        <div className="loginImage"></div>
        <div className="loginContent" style={{ marginTop: "-6%" }}>
          <img src={logo} alt="" />
          <h4>
            <b> Register </b>
          </h4>
          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="uk-margin ">
              <span>
                Email <span style={{ color: "red" }}>*</span>
              </span>{" "}
              <br />
              <div className="uk-inline loginButton">
                <span className="uk-form-icon" uk-icon="icon: user"></span>

                <input
                  placeholder="Enter your email"
                  className="uk-input"
                  type="text"
                  aria-label="Not clickable icon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* {formErrors.email} */}
              </div>
            </div>

            <div className="uk-margin">
              <span>
                Password <span style={{ color: "red" }}>*</span>
              </span>{" "}
              <br />
              <div className="uk-inline loginButton">
                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                <input
                  placeholder="Enter your password"
                  className="uk-input "
                  type="password"
                  aria-label="Not clickable icon"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* {error.password} */}
              </div>
            </div>
            <div className="uk-margin">
              <span>
                Confirm Password <span style={{ color: "red" }}>*</span>
              </span>{" "}
              <br />
              <div className="uk-inline loginButton">
                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                <input
                  placeholder="Re-enter your password"
                  className="uk-input "
                  type="password"
                  aria-label="Not clickable icon"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* {error.password} */}
              </div>
            </div>

            <Checkbox {...label} required />
            <span
              className="terms"
              style={{ fontSize: "11px", fontWeight: "600" }}
              onClick={handleClickOpen("paper")}
            >
              Accept  <span style={{color:'#23BDB8'}}>Terms and conditions</span>
            </span>
            <Dialog
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">
                Terms and Conditions
              </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                >
                  <ul>
                    <li>
                      Minimum points for redemption is 500.
                    </li>
                    <li>
                      The referrers can earn rewards from 49GBP to 249GBP, against the reward points ranging from 500 to 5000.
                    </li>
                    <li>
                      Rewards can be redeemed in the forms of StudyMEDIC Study Materials, Courses or Amazon Gift Voucher.
                    </li>
                    <li>
                      No special offers can be clubbed with this referral program.
                    </li>
                    <li>
                      No refunds shall be available for the purchases made under the referral program.
                    </li>
                  </ul>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Back to Register</Button>
              </DialogActions>
            </Dialog>

            <br />
            <button
              className="uk-button uk-button-primary loginButton"
              type="submit"
            >
              Register
            </button>

            <br />
            <p>
              Already have an account?&nbsp;&nbsp;&nbsp;
              <Link to="/" style={{ color: "#23BDB8", fontWeight: "600" }}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
