import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './css/App.css';

// import './css/components.css';
// import './css/general.css';
// import './css/buttons.css';
import LandingPage from './pages/Landingpage';
import Navigation from './components/Navigation/Navigation';
import { LenisProvider } from './components/LenisProvider';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <LenisProvider>
        <Navigation />
          <Routes>
              <Route path="/" element={<LandingPage />} />
          </Routes>
        <Footer />
      </LenisProvider>
    </Router>
  );
}

export default App;
