import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />

      <Container customClass="min-height"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="https://loja.algartelecom.com.br/empresas/internet/"/>
        </Routes>
      </Container>
     <Footer />
    </Router>
  );
}

export default App;
