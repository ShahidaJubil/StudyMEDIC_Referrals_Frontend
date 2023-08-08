
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

import { useRef } from "react";
// import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import axios from "axios";
import '../dashboard/Dashboard.css'

const Form = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [cv, setCv] = useState("");
  const [formErrors, setFormErrors] = useState({});


  const [isSubmit, setIsSubmit] = useState(false);

  const formValues = {
    name,
    location,
    email,
    phone,
    image,
    cv,
  };
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_8jy0thb",
    //     "template_epdr3cv",
    //     form.current,
    //     "7R2PF30ulLJ37xEJJ"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    const data = {
      Name: name,
      Location: location,
      Email: email,
      Phone: phone,
      cv:cv,
      image:image
    };
    console.log(data, "data");
    axios
      .post(
        "https://sheet.best/api/sheets/e9d62f8e-962a-4eee-b5d6-b21fd3a887cd",
        data
      )
      .then((response) => {
        console.log("response", response);
        setName("");
        setLocation("");
        setEmail("");
        setPhone("");
        setLastName("");
   
        setImage("");
      });

    setFormErrors(validate(formValues));
    // e.target.reset()
    // setFormErrors(validate(formValues));
    // if (formErrors.length === 0) {
    //   Swal.fire("Submitted Successfully");
    // }
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please enter your name";
    }
    if (!values.location) {
      errors.location = "Please enter the location";
    }
    if (!values.email) {
      errors.email = "Enter your email";
    }
    if (!values.phone) {
      errors.phone = "This field is required";
    }

    return errors;
  };
  const Alert = () => {
    Swal.fire({
      title: 'Details uploaded Successfully.. Our team will contact you shortly',
      showCancelButton: false,
   
     
    })

    if (formErrors.length === 0) {
      Swal.fire("Submitted Successfully");
    }

    // })
  };

  return (
    <div className="PartnerForm">
      <form ref={form} method="POST" onSubmit={sendEmail}>
        <Grid container spacing={1} className="filterContainer">
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <TextField
              id="outlined-basic"
              name="name"
              value={name}
              label="First Name"
              variant="outlined"
              className="inputField"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="required">{formErrors.name}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <TextField
              id="outlined-basic"
              name="name"
              value={lastName}
              label="Last Name"
              variant="outlined"
              className="inputField"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-basic"
              name="email"
              value={email}
              label="Email"
              variant="outlined"
              className="inputField"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="required">{formErrors.email}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <TextField
              id="outlined-basic"
              name="location"
              value={location}
              label="Location"
              variant="outlined"
              className="inputField"
              onChange={(e) => setLocation(e.target.value)}
            />
            <p className="required">{formErrors.location}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <TextField
              id="outlined-basic"
              name="phone"
              value={phone}
              label="Phone"
              variant="outlined"
              className="inputField"
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className="required">{formErrors.phone}</p>
          </Grid>
         
         
        
          <Grid item xs={12} xl={12}>
            <button
              className="buttonStyle"
              name="submit"
              style={{ width: "100%" }}
              onClick={Alert}
            >
              Submit
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Form;



