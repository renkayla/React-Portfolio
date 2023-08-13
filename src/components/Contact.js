import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <section className="bg-rose-400 dark:bg-rose-700 p-5">
      <h2 className="text-white font-bold">Contact</h2>
      {submitted ? (
        <p className="text-white">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form className="grid gap-2.5" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-white font-bold">Name</label>
          <input type="text" id="name" placeholder="Name" value={name} onChange={handleNameChange} className="p-2.5 rounded shadow-inner w-full"/>
          <label htmlFor="email" className="text-white font-bold">Email</label>
          <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} className="p-2.5 rounded shadow-inner w-full"/>
          <label htmlFor="message" className="text-white font-bold">Message</label>
          <textarea id="message" placeholder="Message" value={message} onChange={handleMessageChange} className="p-2.5 rounded shadow-inner w-full h-36"></textarea>
          <button className="bg-rose-600 dark:bg-rose-900 text-white rounded px-5 py-2.5 hover:bg-rose-700 dark:hover:bg-rose-800 mt-3">Submit</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
