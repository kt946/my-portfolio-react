import React, { useState, useRef  } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

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
    
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return(
    // section for Contact component
    <section id="contact" className="container py-4 custom-height text-white">
      <h1 className="section-title text-center pb-2 mb-4 animate__animated animate__fadeIn">
        Contact
      </h1>
      <h2 className="fs-4 fw-bold mb-4 text-center animate__animated animate__fadeInDown delay-1">
        Want to connect? Leave a message and I'll get back to you soon!
      </h2>
      <div className="fs-5 mb-4 text-center d-flex flex-column flex-sm-row justify-content-center animate__animated animate__fadeIn animate__delay-1s">
        {/* Link to email */}
        <a 
          href="mailto:ktang1151@gmail.com"
          className="mx-3 text-decoration-none link-info"
        >
          <i className="bi bi-envelope-fill me-2"></i>
          ktang1151@gmail.com
        </a>
        {/* Link to Linked In */}
        <a 
          href="https://www.linkedin.com/in/kyle-tang-"
          className="mx-3 text-decoration-none link-info"
        >
          <i className="bi bi-linkedin me-2"></i>
          LinkedIn
        </a>
      </div>
      {/* contact form */}
      <div className="d-flex mb-4 justify-content-center animate__animated animate__fadeIn animate__delay-1s">
        <form ref={form} id="contact-form" className="rounded p-4 shadow" onSubmit={handleSubmit}>
          {/* name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fs-5">Name</label>
            <input 
              type="text" 
              className="form-control text-light border-secondary"
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
              className="form-control text-light border-secondary"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          {/* message */}
          <div className="mb-4">
            <label htmlFor="message" className="form-label fs-5">Message</label>
            <textarea  
              className="form-control text-light border-secondary"
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
            <button type="submit" className="btn btn-outline-info fw-bold rounded-pill px-4 mx-auto">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;