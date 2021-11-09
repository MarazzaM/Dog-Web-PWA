import styles from  '../styles/Layout.module.scss';
import Navbar from './Navbar';

function Layout({children}) {
    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
