import React, { useState } from "react";
import Container from "react-bootstrap/Container";

export default function Contact() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <Container>
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
          value={formData.email}
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
    </Container>
  );
}
