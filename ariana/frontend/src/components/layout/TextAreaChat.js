import styles from './TextAreaChat.module.css';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';

function TextAreaChat() {
    const [message, setMessage] = useState('');

    // const fetchMessage = async () => {
    //     try {
    //         const response = await axios.get('http://127.0.0.1:5000/api/message');
    //         setMessage(response.data.message);
    //         console.log(response.data.message);
    //     } catch (error) {
    //         console.error('Error fetching message:', error);
    //     }
    // };

    return (
        <div className={styles.container}>
            <div className={styles.textarea_container}>
                <textarea
                    className={styles.textarea}
                    placeholder="Digite aqui sua mensagem ou grave um áudio clicando no botão ao lado"
                ></textarea>
                <button className={styles.button}>
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