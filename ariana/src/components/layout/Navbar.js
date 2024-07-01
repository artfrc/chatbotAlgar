import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/ariana.png'

function Navbar () {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to= "/">
                    <img src={logo} alt="Ariana"  className={styles.logo}/>
                </Link>
                <ul className={styles.list}>
                    
                    <li className={styles.item}>
                        <a 
                        href="https://loja.algartelecom.com.br/para-voce/internet/"
                        target="_blank"
                        rel="noopener noreferrer">
                            Voltar ao site
                        </a>
                    </li>
                   
                </ul>
            </Container>
        </nav>        
    )
}
export default  Navbar