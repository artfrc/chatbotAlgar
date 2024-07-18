import styles from './TextAreaReadOnly.module.css'

function TextAreaReadOnly() {
    return (
        <div className={styles.container}>
            <div className={styles.inputWrapper}>
                <input type="text" className={styles.inputArea} readOnly/>
            </div>
        </div>
    )
}
export default TextAreaReadOnly 