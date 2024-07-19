import styles from './TextAreaReadOnly.module.css'
import { useState } from 'react';

function TextAreaReadOnly({ message }) {
    const [messages, setMessages] = useState([])

    return (
        <div className={styles.container}>
            <div className={styles.inputWrapper}>
                <textarea 
                    type="text" 
                    className={styles.inputArea} 
                    readOnly
                    value={message}
                />
            </div>
        </div>
    )
}
export default TextAreaReadOnly 