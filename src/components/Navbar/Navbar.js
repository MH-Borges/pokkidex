import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'

function Navbar() {
    return (

        <>
            <h1 className={styles.navbar}>
                <Link to="/">Pokédex</Link>
            </h1>
        </>

    )
}

export default Navbar