import styles from './TextAreaChat.module.css'

import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';

function TextAreaChat() {
    return(
        <div className={styles.container}>
            <div className={styles.textarea_container}>
                <textarea className={styles.textarea}></textarea>
                <button className={styles.button}>
                    <FaPaperPlane />            
                </button>
                <button className={styles.button}>
                    <FaMicrophone />
                </button>
            </div>

        </div>
                  
               
    )
}

export default  TextAreaChat