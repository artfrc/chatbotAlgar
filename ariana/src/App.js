import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Site from './components/pages/Site';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/site" element={<Site />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
