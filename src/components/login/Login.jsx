import React, { useState, useContext } from "react";
import "./login.css";
import Axios from "axios";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvide";
import { toast } from "react-toastify";
import logo from "../../Assets/logo.png";


const base_url = `${process.env.REACT_APP_BASE_URL}/api/login/`;
// const base_url = "http://localhost:5000/api/login";

function Login() {
  const { updateContext } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [response, setResponse] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState("");
  const formValues = { password, email };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post(
      base_url,
      {
        email: email,
        password: password,
      },
      { withCredentials: false }
    )
      .then((res) => {
        console.log("response", res);
        const token = res.data.token;
        const usr_name = res.data.username;
        const role = res.data.role;
        const pro_id = res.data.prof_id;
        const userId = res.data.user_id;

        updateContext(token, usr_name);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("username", usr_name);
        sessionStorage.setItem("role", role);
        sessionStorage.setItem("profId", pro_id);
        sessionStorage.setItem("uid", userId);

        setResponse("Success");
        setIsAuthenticated(true);
        console.log("res", userId);
        return res.data;
      })
      .catch((error) => {
        setResponse("Invalid Credentials");
        console.log("Login error:", error);
        setIsAuthenticated(false);
        toast.warning("Invalid Credentials");
      });

    setFormErrors(validate(formValues));
  };

  // Get authenticated user data function

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setIsLoggedIn(true);
    }
  }, [formErrors]);

  const validate = (formDatas) => {
    const errors = {};
    if (!formDatas.email) {
      // errors.username = "Username required";
      toast.warning("enter username");
    }
    if (!formDatas.password) {
      toast.warning("enter password");
      errors.password = "Password required";
    }
    return errors;
  };

  //if login successful
  if (isAuthenticated) {
    return <Navigate to="/dashboard/${id}" />;
  }

  return (
    <div>
      <div className="MentorLogin">
        <div className="loginImage">
          {/* <h2>STUDYMEDIC WELCOMES YOU</h2> */}
        </div>
        <div className="loginContent">
          <img src={logo} alt="" />
          <h4>Login</h4>
          {/* <hr /> */}
          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="uk-margin ">
              <span>Email:</span> <br />
              <div className="uk-inline loginButton">
                <span className="uk-form-icon"></span>

                <input
                  placeholder="Enter your email"
                  className="uk-input"
                  type="text"
                  aria-label="Not clickable icon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* {error.email} */}
              </div>
            </div>

            <div className="uk-margin">
              <span>Password:</span> <br />
              <div className="uk-inline loginButton">
                <span className="uk-form-icon"></span>{" "}
                {/* uk-icon="icon: lock" uk-icon="icon: user"*/}
                <input
                  placeholder="Enter your password"
                  className="uk-input "
                  type="password"
                  aria-label="Not clickable icon"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <br />
            {/* <Link to={'/dashboard'}> */}
            <button
              className="uk-button uk-button-primary loginButton"
              type="submit"
            >
              Login
            </button>
            {/* </Link> */}
          </form>
          <p>
            Don't have an account?&nbsp;&nbsp;&nbsp;
            <Link to="/signup" style={{ color: "#23BDB8", fontWeight: "600" }}>
              Register
            </Link>
          </p>
          <Link
            to="/forgot-password"
            style={{ color: "#23BDB8", fontSize: "13px" }}
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
