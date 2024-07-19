import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './index.css';
import TextAreaChat from './components/layout/TextAreaChat';
import TextAreaReadOnly from './components/layout/TextAreaReadOnly';

function App() {

  return (
    <Router>
      <div id="root">                                           
        <Navbar />
        <div className="container">
        <TextAreaReadOnly message={"Olá! Eu sou Ariana, sou sua assistente virtual. "}/>
        <TextAreaChat />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
