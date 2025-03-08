// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';

import './css/components.css';
import './css/general.css';
import LandingPage from './pages/Landingpage';
import Navigation from './components/Navigation';
import { LocomotiveScrollProvider } from './components/LocomotiveScrollProvider.js';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <LocomotiveScrollProvider>
        <Navigation />
          <Routes>
              <Route path="/" element={<LandingPage />} />
          </Routes>
        <Footer />
      </LocomotiveScrollProvider>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
