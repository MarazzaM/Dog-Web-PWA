import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from '../styles/ContactForm.module.scss';

const Result = () => {
  return <p>Your message has been sent!</p>;
};

export const ContactForm = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_gp9fw5q",
        e.target,
        "user_Nb69BSUrJpVhYQVJjPbZp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(()=>{
    showResult(false);
  }, 5000 )

  return (
    <form action="" onSubmit={sendEmail} className={styles.form}>
        <div className="formWord">
          <h2>Join Us!</h2>
          <span className="primary">Full name</span>
          <br />
          <input type="text" name="fullname" className={styles.input} required />
          <br />
          <span className="primary">Phone Number</span>
          <br />
          <input type="tel" size="20" name="phone" className={styles.input} required />
          <br />
          <span className="primary">Enter Email</span>
          <br />
          <input type="email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" name="email" className={styles.input} required />
          <br />
        </div>
        <div className="formWord">
          <span className="primary">Message</span>
          <br />
          <textarea name="message" className={styles.textfield} id="" cols="15" rows="5" required></textarea>
          <br />
          <button>Submit</button>
          <div className="row">{result ? <Result/> : null}</div>
        </div>
    </form>
  );
};
