import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // set form default state to empty
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  // function to validate form fields
  function handleChange(e) {
    // if email fails validation
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Please provide a valid email address.');
      } else {
        setErrorMessage('');
      }
    } else {
      // if fields are empty
      if (!e.target.value.length) {
        setErrorMessage(`Please provide a ${e.target.name}.`);
      } else {
        setErrorMessage('');
      }
    }

    // if there is no error, set state to field values
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  }

  // function for form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return(
    // section for Contact component
    <section id="contact" className="py-4 custom-bg-color custom-height">
      <div className="container pb-4">
        <h2 className="section-title text-center border-bottom border-3 pb-2 mb-4 animate__animated animate__fadeIn animate__faster">
          Contact
        </h2>
        <p className="fs-4 text-center mb-2 cm-font-heading animate__animated animate__fadeInDown">
          Want to connect? Leave a message and I'll get back to you soon!
        </p>
        <div className="fs-4 text-center d-flex flex-column flex-sm-row justify-content-center animate__animated animate__fadeIn animate__delay-1s">
          {/* Link to email */}
          <a 
            href="mailto:ktang1151@gmail.com"
            className="p-1 mx-3 text-decoration-none text-primary"
          >
            <i className="bi bi-envelope-fill me-2"></i>
            ktang1151@gmail.com
          </a>
          {/* Link to phone number */}
          <a 
            href="tel:7322617869"
            className="p-1 mx-3 text-decoration-none text-primary"
          >
            <i className="bi bi-telephone-fill me-2"></i>
            732-261-7869
          </a>
        </div>
        {/* contact form */}
        <div className="d-flex justify-content-center animate__animated animate__fadeIn animate__delay-1s">
          <form id="contact-form" className="rounded my-2 mx-3 p-4 bg-white shadow" onSubmit={handleSubmit}>
            {/* name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">Name</label>
              <input 
                type="text" 
                className="form-control"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            {/* email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fs-5">Email address</label>
              <input 
                type="email" 
                className="form-control"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            {/* message */}
            <div className="mb-4">
              <label htmlFor="message" className="form-label fs-5">Message</label>
              <textarea  
                className="form-control"
                name="message"
                defaultValue={message}
                rows="5"
                onBlur={handleChange}
              />
            </div>
            {/* display error message */}
            {errorMessage && (
              <div className="mb-3">
                <p className="text-danger">{errorMessage}</p>
              </div>
            )}
            <div className="d-flex">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill px-4 mx-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;