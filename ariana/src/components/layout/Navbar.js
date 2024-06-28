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
                        <Link to = "/" >Home</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to = "/site">Site</Link>
                    </li>
                </ul>
            </Container>
        </nav>        
    )
}
export default  Navbar