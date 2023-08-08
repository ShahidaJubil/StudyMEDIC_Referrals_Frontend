import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./Dashboard.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { toast } from "react-toastify";
import Table from "./Table";
import Swal from "sweetalert2";

function ReferLinkForm(props) {
  const { userId } = useParams();
  // const userId = sessionStorage.getItem('uid');
  console.log("UserId: ", userId);

  const [fname, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [referralId, setReferralId] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#6C6D6E",
      },
      secondary: {
        main: "#EE2C82",
      },
    },
  });

  const formValues = {
    fname,
    lname,
    email,
    contact,
    location,
    course,
    duration,
  };

  const validateForm = (formData) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formData.email) {
      errors.email = "*Enter your email";
    } else if (!regex.test(formData.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!formData.fname) {
      errors.fname = "*Enter First name";
    }
    if (!formData.course) {
      errors.course = "*Select course";
    }
    if (!formData.contact) {
      errors.contact = "*Enter your phone number";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data and show toast messages for errors
    const errors = validateForm(formValues);
    setFormErrors(errors);
    
    // If there are form errors, stop the submission process
    if (Object.keys(errors).length !== 0) {
      return;
    }

    try {
      const googleSheetsResp = await fetch(
        "https://v1.nocodeapi.com/itsupport/google_sheets/YSHyzmWuKhzHDwzd?tabId=Referrals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              userFname,
              userLname,
              userMail,
              userContact,
              fname,
              lname,
              email,
              location,
              contact,
              course,
              duration,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      if (!googleSheetsResp.ok) {
        throw new Error(
          "Failed to submit referral data to Google Sheets"
        );
      }

      await googleSheetsResp.json();

      const url =  `${process.env.REACT_APP_BASE_URL}/api/profiles/${userId}/referrals`;
      const response = await axios.post(
        url,
        {
          rfname: fname,
          rlname: lname,
          remail: email,
          rcontact: contact,
          rlocation: location,
          rcourse: course,
          rduration: duration,
        },
        { withCredentials: false }
      );

      if (response.status !== 200) {
        throw new Error(
          "Failed to submit referral data"
        );
      }

      const referralId = response.data.referralId;
      setReferralId(referralId);
      setSubmittedData(response.data);
      console.log("form values", formValues);
      console.log("submitted data", submittedData);
      console.log("response", response.data);


      setName("");
      setLname("");
      setEmail("");
      setContact("");
      setLocation("");
      setCourse("");
      setDuration("");
      
      Swal.fire({
        title: "Details submitted successfully",
        html: `
          <p>Our team will contact you shortly</p>
          <p>You can also participate in this referral program <a href="https://studymedic.com/referral-portal/">  <span className='formPopup'>Click here</span></a></p>
        `,
        showCancelButton: false,
        customClass: {
          title: "swalTitle",
          confirmButton: "swalConfirmButton",
        },
        customContainerClass: "swalContainer",
        width: "60%",
        padding: "5%",
      })
      
    } catch (error) {
      console.log("Got here too");
      console.log("error:", error);
      toast.error("Failed to submit referral data. Please try again later.");
    }
  };

  // Course and stream options...
  const courseOptions = [
    "MRCOG",
    "EBCOG",
    "MRCPI",
    "FCPS",
    "MRCEM",
    "MRCS",
    "FRCS",
    "MRCP",
    "FMGE",
    "MRCPCH",
    "FRCR",
    "MS/MD/DNB/OBG",
    "NEET SS",
    "PLAB",
    "Ultrasound",
    "REPRO",
    "HRO",
    "Vaginal Surgery",
  ];

  const streamOptions = {
    MRCOG: ["Part 1", "Part 2", "Part 3"],
    EBCOG: ["Part 1", "Part 2 - OSCE"],
    MRCPI: ["Part 2 Written", "Part 2 OSCE"],
    FCPS: [
      "Part 1",
      "IMM Written",
      "Part 2 Written",
      "Part 2 Viva",
      "FCPS Surgery Part 2 Written",
      "FCPS Medicine- IMM",
    ],
    MRCEM: ["Primary", "Intermediate/SBA", "OSCE"],
    MRCS: ["Part A", "Part B - General Surgery", "Part B - ENT"], // Part B subdivision Part B - General Surgery & Part B - ENT
    FRCS: ["Section 1", "Section 2"], // FRCS Ophthalmology
    MRCP: ["Part 1", "Part 2", "PACES"],
    MRCPCH: ["FOP", "TAS", "Clinical"],
    FRCR: ["Part 1", "Part 2A", "Part 2B"],
    NEET_SS: ["NEET SS", "INI SS"],
    PLAB: ["PLAB 1", "PLAB 2"],
  };

  // Fetch user data from the backend API
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/get/` + userId
        );
        setUser(response.data);
        console.log("user info from refer form", response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);
  console.log("form-user", user?.user?.email);
  const userMail = user?.user?.email;
  const userFname = user?.user?.fname;
  const userLname = user?.user?.lname;
  const userContact = user?.user?.phone;

  return (
    <div className="ReferForm">
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <Grid container spacing={1}>
            {/* Form fields... */}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">
                First Name <span style={{ color: "red" }}>*</span>
              </legend>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="First Name"
                  aria-label="Input"
                  value={fname}
                  onChange={(e) => setName(e.target.value)}
                />
                {formErrors.fname && (
                  <span className="error-text">{formErrors.fname}</span>
                )}
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">Last Name</legend>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Input"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">
                Email<span style={{ color: "red" }}>*</span>
              </legend>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Email"
                  aria-label="Input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {formErrors.email && (
                  <span className="error-text">{formErrors.email}</span>
                )}
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">Location</legend>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Location"
                  aria-label="Input"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">
                Phone<span style={{ color: "red" }}>*</span>
              </legend>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Phone"
                  aria-label="Input"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                {formErrors.contact && (
                  <span className="error-text">{formErrors.contact}</span>
                )}
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">
                Course<span style={{ color: "red" }}>*</span>
              </legend>
              <Autocomplete
                options={courseOptions}
                value={course}
                onChange={(event, newValue) => setCourse(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    focused
                    className="input formDropdown"
                    style={{ border: "none !important" }}
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      ...params.InputProps,
                      classes: { notchedOutline: "noBorder" },
                    }}
                  />
                )}
              />
              {formErrors.course && (
                <span className="error-text">{formErrors.course}</span>
              )}
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              {course && Array.isArray(streamOptions[course]) ? (
                <>
                  <legend className="uk-legend">Stream</legend>
                  <Autocomplete
                    options={streamOptions[course]}
                    value={duration}
                    onChange={(event, newValue) => setDuration(newValue)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputLabelProps={{ shrink: false }}
                        color="primary"
                        focused
                        className="input"
                      />
                    )}
                  />
                  {formErrors.duration && (
                    <span className="error-text">{formErrors.duration}</span>
                  )}
                </>
              ) : null}
            </Grid>

            <Grid item lg={12} md={6} sm={12} xs={12}>
              <br />
              <Button
                variant="contained"
                className="referSubmit"
                type="submit"
                color="secondary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </form>
    </div>
  );
}

export default ReferLinkForm;
