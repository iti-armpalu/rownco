"use client";

import { useActionState } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./contact-form.module.css";
import { MotionConfig } from "framer-motion";

export default function ContactForm({ onSubmit }) {
  const [formState, formAction] = useActionState(onSubmit, "");
  const formRef = useRef(null);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (formState?.success) {
      // Clear form fields
      if (formRef.current) {
        formRef.current.reset();
      }
      // Display success message
      setSubmitMessage(formState.message);
      // Clear message after 5 seconds
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <form ref={formRef} action={formAction} className={styles.contactForm}>
      <div className={styles.flexContainer}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <textarea id="message" name="message" placeholder="Message" required />
      </div>
      <div>
        {!submitMessage && <button type="submit">Submit</button>}
        {submitMessage && <p>{submitMessage}</p>}
      </div>
    </form>
  );
};
