import React from 'react';

function Contact() {
  return (
    <div className="content-header">
      <h2>Get In Touch</h2>
      <div id="contact-blurb">
        <p>Thanks for reaching out! Feel free to leave your name, email address, and a breif description of your project. Or, if you prefer, you can contact me via email or LinkedIn.</p>
      </div>
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="name" className="form-control" id="name-field" placeholder="Name" />
        </div>
        <div className="form-group">
          <label for="email-field">Email Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          {/* <label for="" */}
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
