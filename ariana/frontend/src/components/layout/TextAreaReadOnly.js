import styles from './TextAreaReadOnly.module.css'
import { useState } from 'react';

function TextAreaReadOnly({ message }) {

    return (
        <div className={styles.container}>
            <div className={styles.inputWrapper}>
                <textarea
                    type="text" 
                    className={styles.inputArea} 
                    readOnly
                    value={message.join('\n')}
                />
            </div>
        </div>
    )
}
export default TextAreaReadOnly 