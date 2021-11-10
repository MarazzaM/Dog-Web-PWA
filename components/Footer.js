import React from "react";
import Image from 'next/image'
import styles from "../styles/Footer.module.scss";


function Footer() {
    const image = require('../public/face.svg');
    
  return (
    <div className={styles.container}>
      <div>

      <Image
        src= {image}
        alt="LOGO"
        width={100}
        height={100}

        />

      </div>
      <div>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          veritatis.
        </span>
        <div>Sections</div>
      </div>
      <div>Socials</div>
    </div>
  );
}

export default Footer;
