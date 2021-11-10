import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import Nam from "./Nam";

function Footer() {
  const image = require("../public/face.svg");

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
          <Nam />
        <Image src={image} alt="LOGO" width={100} height={100} />
      </div>
      <div className={styles.text}>
          <h3 className='primary'>Keep in mind!</h3>
        <span> 
          If you live with your significant other or a roommate, you may have a
          bit of back in forth about what show or movie you want to watch, but
          your dog will always be happy with your selection (even if you found
          the movie disappointing). Plus, if you're the type that hates when
          people talk during a film, you won't have to worry about your pup!
        </span>
      </div>
      <div className={styles.social}>
        Socials
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/matías-edgardo-marazza-cantero/"
              target="_blank"
              rel="noopener noreferrer" className={styles.portfolio}
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MarazzaM"
              target="_blank"
              rel="noopener noreferrer" className={styles.portfolio}
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://marazzam.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer" className={styles.portfolio}
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
