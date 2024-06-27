import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {

    return(

       <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <a 
                    href="https://www.youtube.com/c/algartelecom" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </li>

            <li>
                <a 
                    href="https://www.youtube.com/c/algartelecom" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FaYoutube/>
                </a>
            </li>

            <li>
                <a 
                    href="https://www.linkedin.com/company/algar-telecom/mycompany/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </li>
        </ul>
        <p className={styles.copy_right}> 
            <span>Ariana</span> &copy; 2024
        </p>
       </footer>
    )
}

export default Footer