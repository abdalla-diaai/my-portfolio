import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./styles.css";

export default function Contact() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    success: "",
  });
  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Clear `formData.firstName` and `formData.lastName`, clearing the inputs
    setFormData({
      name: "",
      email: "",
      message: "",
      success: "Message Sent Successfully!",
    });
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <Container id="contact-us">
      <h1 className="display-4">Contact Us</h1>
      <p className="lead">
        Let’s get this conversation started. Tell us a bit about yourself, and
        we’ll get in touch as soon as we can.
      </p>
      <form className="form">
        <input
          className="form-control"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          className="form-control"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <textarea
          className="form-control"
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="Message"
        />
        <button
          className="btn btn-dark btn-sm"
          type="button"
          onClick={handleFormSubmit}
        >
          Send
        </button>
      </form>
      <div className="alert alert-light" role="alert">
        {formData.success}
      </div>
      <p className="lead">
        By submitting my personal data, I consent to Zendesk collecting,
        processing, and storing my information in accordance with the{" "}
        <a href="https://www.zendesk.co.uk/company/agreements-and-terms/privacy-notice/">
          Zendesk Privacy Notice
        </a>
        .
      </p>
    </Container>
  );
}
