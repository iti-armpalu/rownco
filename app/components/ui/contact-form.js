'use client'

import { useState } from 'react';
import styles from "./contact-form.module.css";
import { MotionConfig } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //   'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //   nameEmail: `${formData.name} - ${formData.email}`,
    //   message: formData.message
    //   })
    // });

    // if (res.ok) {
    //   alert('Message sent successfully!');
    //   setFormData({ name: '', email: '', message: '' });
    // } else {
    //   alert('Failed to send message.');
    // }
    console.log('📬 Dummy form submission:', {
      nameEmail: `${formData.name} - ${formData.email}`,
      message: formData.message
    });
  
    alert('Message "sent" successfully (dummy)!');
  
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
    <div className={styles.flexContainer}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
    </div>
    <div className={styles.inputGroup}>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
      />
    </div>
    <button type="submit">Submit</button>
  </form>
  );
};

export default ContactForm;