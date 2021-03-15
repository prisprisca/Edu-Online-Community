import React from "react";
import "../style/Contact.css";
import { TextField, Button } from "@material-ui/core";

function Contact() {
  return (
    <div
      style={{
        background: "white",
        margin: "1rem",
        padding: "1rem",
        boxShadow: "10px 5px 10px lightgray",
      }}
    >
      <div className="contact-text">
        <h1>Contact Us</h1>
        <p>
          Do you have any inquiries or questions?
          <br /> Please fill out the form to contact us. Thank you!!
        </p>
      </div>
      <div className="input_form">
        <form style={{ margin: "2rem" }}>
          <TextField label="Full Name" fullWidth autocomplete="none" />
          <TextField label="Email" fullWidth autocomplete="none" />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={5}
            autocomplete="none"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
