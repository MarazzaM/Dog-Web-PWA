import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.scss'

function Card(props) {
    return (

        <div  className={styles.card} id={props.id}>

        <Image
        src={props.image}
        alt="Picture of the author"
        width={300}
        height={300}
        className={styles.image}
        placeholder="blur"
        layout="responsive"
        blurDataURL
        />

       <p><cite className={styles.quote}>{props.quote}</cite> <br />{props.author}</p> 
        </div>
    )
}

export default Card
