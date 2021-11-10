import styles from  '../styles/Layout.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';
function Layout({children}) {
    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Footer />
        </>
    )
}

export default Layout
