import React from 'react'
import styles from '../styles/Buttons.module.scss'
import Link from 'next/link'

function Buttons() {
    return (
        <div className={styles.container}>
            <Link href="/About">About</Link>
            <Link href="/History">History</Link>
            <Link href="/Contact">Contact</Link>
        </div>
    )
}

export default Buttons
