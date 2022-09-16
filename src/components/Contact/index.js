import React from 'react';

function Contact() {
  return(
    <section id="contact" className="mx-5 py-3 text-white">
      <h2 className="section-title">
        Contact
      </h2>
      <form id="contact-form" className="border rounded my-2">
        <div className="m-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label fs-5">Name</label>
            <input 
              type="text" 
              className="form-control"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fs-5">Email address</label>
            <input 
              type="email" 
              className="form-control"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label fs-5">Message</label>
            <textarea  
              className="form-control"
              name="message"
              rows="5"
            />
          </div>
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