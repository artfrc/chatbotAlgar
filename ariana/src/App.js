import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Site from './components/pages/Site';
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
          <Routes>
            <Route path="/site" element={<Site />} />
          </Routes>
        <TextAreaReadOnly />
        <TextAreaChat />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
