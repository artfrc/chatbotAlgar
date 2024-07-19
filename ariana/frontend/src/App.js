import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './index.css';
import TextAreaChat from './components/layout/TextAreaChat';
import TextAreaReadOnly from './components/layout/TextAreaReadOnly';
import { useState } from 'react';

function App() {

  const [message, setMessage] = useState(["Olá! Eu sou Ariana, sua assistente virtual."])

  const handleMessageChange = (newMessage) => {
    setMessage(prevMessages => [...prevMessages, newMessage])
  } 

  return (
    <Router>
      <div id="root">                                           
        <Navbar />
        <div className="container">
        <TextAreaReadOnly 
          message={message}
        />
        <TextAreaChat 
          onMessageChange={handleMessageChange}
        />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
