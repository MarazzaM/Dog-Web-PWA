import React from 'react'
import styles from '../styles/About.module.scss'

function Branch(props) {
    return (
        <div className={styles.branch}>
        <h1>{props.name} Branch</h1>
    <iframe
      src= {props.map}
      width="300"
      height="300"
      loading="lazy"
    ></iframe>
    <p>{props.phone}</p>
    <p>Branch manager: {props.manager}</p>
    </div>
    )
}

export default Branch
