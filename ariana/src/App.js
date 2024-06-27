import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Site from './components/pages/Site';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
        <Container customClass= "min-height">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/site">Site</Link>
          </ul>

          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/site' element={<Site />} />
          </Routes>
      
          <p>Footer</p>
        </Container>
    </Router>
  );
}

export default App;
