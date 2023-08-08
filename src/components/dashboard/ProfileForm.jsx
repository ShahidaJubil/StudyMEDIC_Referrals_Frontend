import { React, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiPencilFill } from "react-icons/ri";
import "./Dashboard.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./Dashboard.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Swal from "sweetalert2";


export default function ProfileForm() {
  const id = sessionStorage.getItem("uid");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const [activeTab, setActiveTab] = useState("first");



  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = createTheme({
    //change
    palette: {
      primary: {
        main: "#6C6D6E",
      },
      secondary: {
        main: "#E32D5D",
      },
      third: {
        main: "	#FFFFFF",
      },
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (fname) formData.append("fname", fname);
    if (lname) formData.append("lname", lname);
    if (email) formData.append("email", email);
    if (location) formData.append("location", location);
    if (phone) formData.append("phone", phone);
    if (image) formData.append("imageData", image);

    await axios
      .put(`${process.env.REACT_APP_BASE_URL}/api/update/` + id, formData, {
        withCredentials: false,
      })
      .then((res) => {
        // console.log("Updated Profile Response", res);
        // console.log("id", id);
        // if (!formChanged) {
        //   return; // Don't show Swal if form hasn't been changed
        // }
        Swal.fire({
          title: "Profile details updated succesfully",
          showCancelButton: false,
          customClass: {
            title: "swalTitle",
            confirmButton: "swalConfirmButton",
          },
          customContainerClass: "swalContainer",
          
        }).then((result) => {
          if (result.isConfirmed) {
            // Page refresh when "OK" button is clicked
            window.location.reload();
            setActiveTab("first"); // Switch to "My Profile" tab
            handleClose(); // Close the modal
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Network Error",
          showCancelButton: false,
        });
      });
  };

  const handleCancelClick = () => {
    handleClose();
  };

  return (
    <div className="ReferralForm">
      <h3>
        <b>Update Your Profile</b>
      </h3>
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">First Name</legend>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="First Name"
                  aria-label="Input"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
            </Grid>
            <br />
            <br />
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">Last Name</legend>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Input"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </Grid>
            <br />
            <br />
            {/* <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">Email</legend>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Email"
                  aria-label="Input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Grid> */}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">Location</legend>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Location"
                  aria-label="Input"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <legend className="uk-legend">Phone</legend>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Phone"
                  aria-label="Input"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </Grid>
            <br />
            <br />
          {/*   <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                variant="standard"
                label="Upload Photo"
                color="primary"
                type="file"
                focused
                classNameName="input"
                onChange={(e) => setImage(e.target.files[0])}
                inputProps={{ multiple: true }}
              />
              <br />
              <br />
            </Grid> */}

            <Grid item lg={6} md={6} sm={12} xs={12} classNameName="buttonGrid">
              <Button
                variant="contained"
                className="referSubmit"
                type="submit"
                color="secondary"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </form>
    </div>
  );
}
