import React from 'react'
import { ContactForm } from '../components/ContactForm'
import styles from "../styles/Contact.module.scss";

function Contact() {
    return (
        <div>
             <h1 className={styles.title}>
        <span className="primary">C</span>
        <span className="secondary">O</span>
        <span className="tertiary">N</span>
        <span className="primary">T</span>
        <span className="secondary">A</span>
        <span className="tertiary">C</span>
        <span className="primary">T</span>
      </h1>
            <ContactForm/>
        </div>
    )
}

export default Contact
