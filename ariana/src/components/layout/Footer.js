import {FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaYoutube></FaYoutube>
                </li>
                <li>
                    <FaInstagram></FaInstagram>
                </li><li>
                    <FaLinkedin></FaLinkedin>
                </li>
            </ul>
        <p className={styles.copy_right}>
            <span >Ariana</span> &copy; 2024
        </p>
        </footer>
    )
}
export default  Footer