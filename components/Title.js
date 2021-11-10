import React from 'react'
import styles from '../styles/Home.module.scss'

function Title() {
    return (
        <h1 className={styles.title}>
                    
        <span className="primary1">Ñ</span>
        <span className="secondary1">A</span>
        <span className="tertiary1">M</span>
        <span  className={styles.letters}>  </span>

                    
        <span className="primary1">Ñ</span>
        <span className="secondary1">A</span>
        <span className="tertiary1">M</span>
        <span className={styles.letters}>  </span>
                   
                    
        <span className="primary1">D</span>
        <span className="secondary1">O</span>
        <span className="tertiary1">G</span>
        <span className="exclamation1">!</span>
    </h1>
    )
}

export default Title
