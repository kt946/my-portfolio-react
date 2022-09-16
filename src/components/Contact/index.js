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
    <section id="contact" className="mx-5 py-3 text-white">
      <h2 className="section-title">
        Contact
      </h2>
      <form id="contact-form" className="border rounded my-2" onSubmit={handleSubmit}>
        <div className="m-4">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;