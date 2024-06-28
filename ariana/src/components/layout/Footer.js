import {FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.youtube.com/@algartelecom" target="_blank">
                        <FaYoutube />
                    </a>
                </li>
                <li>
                    <a href="https://loja.algartelecom.com.br/para-voce/internet/?utm_source=google&utm_medium=cpc&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term=&gad_source=1&gclid=CjwKCAjwvvmzBhA2EiwAtHVrb39Vf2NiG6gLT7YuX5kcG-gPuU61HMasj8xMeboTep-fR8gD4yDvCxoCc4MQAvD_BwE" target="_blank">
                        <FaInstagram />
                    </a>
                </li><li>
                    <a href="https://www.linkedin.com/company/algar-telecom/mycompany/" target="_blank">
                        <FaLinkedin />
                </a>
                </li>
            </ul>
        <p className={styles.copy_right}>
            <span >Ariana</span> &copy; 2024
        </p>
        </footer>
    )
}
export default  Footer