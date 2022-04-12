import { Link } from "react-router-dom";
import styles from './Button.module.scss'

function Button({to, text}) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default Button