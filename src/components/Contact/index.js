import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Please provide a valid email address.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Please provide a ${e.target.name}.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return(
    <section id="contact" className="py-4 custom-bg-color custom-height">
      <div className="container pb-4">
        <h2 className="section-title text-center border-bottom border-primary border-2 pb-2 mb-4">
          Contact
        </h2>
        <p className="fs-4 text-center mb-2">
          Thanks for visiting! Leave a message and I'll get back to you soon!
        </p>
        <div className="fs-4 text-center d-flex flex-column flex-sm-row justify-content-center">
          <a 
            href="/"
            className="p-1 mx-3 text-decoration-none"
          >
            <i className="bi bi-envelope-fill me-2"></i>
            test@test.com
          </a>
          <a 
            href="/"
            className="p-1 mx-3 text-decoration-none"
          >
            <i className="bi bi-telephone-fill me-2"></i>
            555-555-5555
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <form id="contact-form" className="rounded my-2 mx-3 p-4 bg-white shadow" onSubmit={handleSubmit}>
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
            {errorMessage && (
              <div className="mb-3">
                <p className="text-danger">{errorMessage}</p>
              </div>
            )}
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary rounded-pill px-4">
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