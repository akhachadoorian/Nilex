// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';

import './css/components.css';
import './css/general.css';
import LandingPage from './pages/Landingpage';


function App() {
  return (
    <Router>
      <div className='content-wrapper'>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<LandingPage />}  />
        </Routes>
        {/* <Footer /> */}
      </div>
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
