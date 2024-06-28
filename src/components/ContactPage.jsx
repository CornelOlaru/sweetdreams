import  { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import UpButton from './UpButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    message: '',
    agree: false,
    email: '', 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const sendEmail = (templateId, variables) => {
    return emailjs.send('service_2s17kpf', templateId, variables, 'bMRkCDV02g_LhAJnS');
  };

  const submitBtn = (event) => {
    event.preventDefault(); // Prevent page reload

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      city: formData.city,
      message: formData.message,
      email: formData.email,
    };

    sendEmail('template_39xrlvq', templateParams)
      .then((result) => {
        alert("Message Sent Successfully!!!");
        console.log(result.status, result.text)
        // Send auto-reply email
        sendEmail('template_swcxce7', { 
          email: formData.email, 
          firstName: formData.firstName 
        });

        setFormData({
          firstName: '',
          lastName: '',
          city: '',
          message: '',
          agree: false,
          email: '',
        });
      }, (error) => {
        console.error('Failed to send email:', error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className=" contact-container">
      <div className="first-contact-container">
        <h2>Are you looking for help?</h2>
        <h3>Contact us any time: </h3>
        <p>
          We are open to discussing any request and we welcome your feedback!
          Please fill out the form below, and we will respond promptly. You can
          also reach us by phone at <br />
          <span>
            <i className="fa fa-phone"></i> <a href="tel:+40000111222">+40000111222</a>
          </span>{" "}
          or directly via email at
          <span>
            <br />
            <i className="fa fa-envelope"></i>
            <a href="mailto:contact@sweetdreams.ro">contact@sweetdreams.ro</a>
          </span>
          .
        </p>
      </div>
      <div id="main-form" className="p-5 second-contact-container">
        <div>
          <h2 style={{ color: "black" }}>Stay in Touch</h2>
          <div className="social-separator"></div>
        </div>

        <form className="row g-3" onSubmit={submitBtn}>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name..."
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name..."
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <select
              className="form-select"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose your city...</option>
              <option>Bucuresti</option>
              <option>Timis</option>
              <option>Cluj-Napoca</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-12">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Enter your message here..."
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="agree">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      <UpButton/>
    </div>
  );
}
