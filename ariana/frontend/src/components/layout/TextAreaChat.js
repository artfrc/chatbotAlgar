import styles from './TextAreaChat.module.css';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

function TextAreaChat({ onMessageChange }) {

    const [input, setInput] = useState("")

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    
    const handleClick = () => {
        if(input.trim() !== "") {
            onMessageChange(input)
            setInput("");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.textarea_container}>
                <textarea
                    className={styles.textarea}
                    placeholder="Digite aqui sua mensagem ou grave um áudio clicando no botão ao lado"
                    value={input}
                    onChange={handleInputChange}
                ></textarea>
                <button className={styles.button} onClick={handleClick}>
                    <FaPaperPlane />
                </button>
                <button className={styles.button}>
                    <FaMicrophone />
                </button>
            </div>
        </div>
    );
}

export default TextAreaChat;