import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Site from './components/pages/Site';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
        <Navbar />
        <Container customClass= "min-height">
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/site' element={<Site />} />
          </Routes>
          <Footer />
        </Container>
    </Router>
  );
}

export default App;
