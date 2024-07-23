    import styles from './TextAreaChat.module.css';
    import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
    import { useState } from 'react';

    function TextAreaChat({ onMessageChange }) {

        const [input, setInput] = useState("");

        const handleInputChange = (event) => {
            setInput(event.target.value);
        };
        
        const handleClick = async () => {
            if (input.trim() !== "") {
              try {
                const response = await fetch("http://127.0.0.1:5000/api/message", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ message: input })
                });
                        const jsonData = await response.json();
                console.log(jsonData);
                onMessageChange(jsonData.message); // Pass the full response for further processing if needed
                // Update the input with the API response message
                setInput('');
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            }
          };

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
