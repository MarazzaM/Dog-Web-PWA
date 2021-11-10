import React from "react";
import Image from 'next/image'
import styles from "../styles/Footer.module.scss";


function Footer() {
  return (
    <div className={styles.container}>
      <div>
      <Image
        src="/../public/face.svg"
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
