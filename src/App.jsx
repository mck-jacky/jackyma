import React from 'react';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ProjectsPage from './pages/ProjectsPage';
// import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import LighthousePage from './pages/PortfolioPage/Projects/LighthousePage';
import ParkMatePage from './pages/PortfolioPage/Projects/ParkMatePage';
import QuantSocPage from './pages/PortfolioPage/Projects/QuantSocPage/QuantSocPage';
import AirbrbPage from './pages/PortfolioPage/Projects/Airbrb';
import AboutPage from './pages/AboutPage';
import './index.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/portfolio" element={<PortfolioPage />}/>
          <Route path="/portfolio/lighthouse" element={<LighthousePage />}/>
          <Route path="/portfolio/parkmate" element={<ParkMatePage />}/>
          <Route path="/portfolio/quantsoc" element={<QuantSocPage />}/>
          <Route path="/portfolio/airbrb" element={<AirbrbPage />}/>
          {/* <Route
            path="/photos"
            element={<PhotosPage />}
          /> */}
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
