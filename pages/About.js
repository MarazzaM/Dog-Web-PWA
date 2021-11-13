import React from "react";
import styles from "../styles/About.module.scss";
import Branch from "../components/Branch";

function About() {
    const branch = [
        {
            name: "Atlantis",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486108.1507908944!2d-25.25176856380314!3d31.430584599527663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6ebc42f9454938c!2zMzHCsDE1JzE1LjUiTiAyNMKwMTUnMzAuNSJX!5e0!3m2!1ses-419!2sar!4v1636839864854!5m2!1ses-419!2sar",
            phone:"+898 5 1616-2502",
            manager:"Michael Scott"
        },
        {
            name: "Egipt",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.844117801975!2d33.629650215454184!3d27.380583282928413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85c0b32330c94693!2zMjfCsDIyJzUwLjEiTiAzM8KwMzcnNTQuNiJF!5e0!3m2!1ses-419!2sar!4v1636840802537!5m2!1ses-419!2sar",
            phone:"+20 4 456812-48614",
            manager:"Tony Soprano"
        },
        {
            name: "Tanzania",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486108.1507908944!2d-25.25176856380314!3d31.430584599527663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6ebc42f9454938c!2zMzHCsDE1JzE1LjUiTiAyNMKwMTUnMzAuNSJX!5e0!3m2!1ses-419!2sar!4v1636839864854!5m2!1ses-419!2sar",
            phone:"+255 9 16682-10456",
            manager:"Angela Bower"
        }
    ]
  return (
    <div>
      <h1 className={styles.title}>
        <span className="primary">A</span>
        <span className="secondary">B</span>
        <span className="tertiary">O</span>
        <span className="primary">U</span>
        <span className="secondary">T</span>
      </h1>
      <div className={styles.container}>
        <h2>Who we are?</h2>
        <p className={styles.text}>
          We are a group of dog fanatics! We have branches all over the world
          who help all the animals that we can. if you you want to be part of
          our organization, you can fill out our contact form or come join us at
          our main branch, which is located in Atlantis, all visitors are
          welcome!
        </p>
      </div>
        <div className={styles.branches}>
        <Branch
        name={branch[0].name}
        map={branch[0].map}
        phone={branch[0].phone}
        manager={branch[0].manager}
         />
         <Branch
        name={branch[1].name}
        map={branch[1].map}
        phone={branch[1].phone}
        manager={branch[1].manager}
         />
         <Branch
        name={branch[2].name}
        map={branch[2].map}
        phone={branch[2].phone}
        manager={branch[2].manager}
         />
        </div>

    </div>
  );
}

export default About;
