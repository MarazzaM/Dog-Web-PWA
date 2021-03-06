import React from 'react'
import styles from '../styles/Card.module.scss'

function Card(props) {
    const path = `${props.image}`;
    return (

        <div  className={styles.card} id={props.id}>

        <img
        src= {`${path}`}
        alt="Picture of the author"
        width={300}
        height={300}
        className={styles.image}
        />

       <p><cite className={styles.quote}>{props.quote}</cite> <br />{props.author}</p> 
        </div>
    )
}

export default Card
