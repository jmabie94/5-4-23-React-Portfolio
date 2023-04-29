import React from "react";
import "./Contact.css";
// the next import was auto-generated trash
// import { response, response } from "express";

/* using web3forms to allow for a fully-functional contact form! */
function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Contacting...");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfcb8c2b-ca22-4e53-ac02-9e4703c528e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((response = response.json()));

    if (response.success) {
      console.log("Success", response);
      setResult(response.message);
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };

  return (
    <>
      <div className="home-header">
        <span className="page-title">Contact</span>
        <div className="contact-bar">
          <span className="phone">+1 (626) 864-0110</span>
          <span className="email">johnmabie94@gmail.com</span>
          <span className="city">Tulsa, OK</span>
        </div>
      </div>
      <div className="contact intro-container">
        <div className="page-intro">
          <div className="text-box text-contact">
            <div id="box2">
              <h2>Feel free to reach out using the form below!</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-box">
        <div className="form">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          <span className="contact-message">{result}</span>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
