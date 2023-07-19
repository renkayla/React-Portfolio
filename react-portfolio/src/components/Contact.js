import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can make an API request or handle the submission in any other way

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');

    // Set submitted flag to true
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      {submitted ? (
        <p className="submission-message">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" value={name} onChange={handleNameChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Message" value={message} onChange={handleMessageChange} />
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
