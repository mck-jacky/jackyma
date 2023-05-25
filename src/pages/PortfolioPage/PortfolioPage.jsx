import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar'
import './index.css';
import PortfolioCard from '../../components/PortfolioCard';
import Lighthouse from '../../images/Lighthouse.png'
import LighthouseLogo from '../../images/lighthouselogo.png'
import ParkMateLogo from '../../images/ParkMateLogo.jpg'
import ParkMate from '../../images/ParkMate6.png'
import AirbrbLogo from '../../images/AirbrbLogo.png'
import Airbrb from '../../images/Airbrb.png'
import QuantSocLogo from '../../images/QuantSocLogo.png'
import QuantSoc from '../../images/QuantSoc.png'
import MoneyManagerLogo from '../../images/MoneyManagerLogo.png'

const PortfolioPage = () => {
  return (
    <div className='portfolio-page-container'>
      <Sidebar />
      <div className='portfolio-content'>
        <h1 className='title'>Portfolio</h1>
        <hr className='divider' />
        <div className='card-container'>
          <Link to="/portfolio/lighthouse" className="portfolio-card-link">
            <PortfolioCard 
              productName="Lighthouse"
              nameOfEvent="UNSW CSESoc Annual Flagshop Hackathon - 2nd Place"
              image={LighthouseLogo} 
              hoverImage={Lighthouse}
            />
          </Link>
          <Link to="/portfolio/parkmate" className="portfolio-card-link">
            <PortfolioCard 
              productName="ParkMate" 
              nameOfEvent="SYNCS Hack 2022"
              image={ParkMateLogo} 
              hoverImage={ParkMate}
            />
          </Link>
          <Link to="/portfolio/quantsoc" className="portfolio-card-link">
            <PortfolioCard 
              productName="UNSW QuantSoc Website" 
              nameOfEvent="UNSW QuantSoc Technical Subcomm"
              image={QuantSocLogo} 
              hoverImage={QuantSoc}
            />
          </Link>
          <Link to="/portfolio/airbrb" className="portfolio-card-link">
            <PortfolioCard 
              productName="Airbrb" 
              nameOfEvent="UNSW COMP6080 Web Front-End Programming"
              image={AirbrbLogo} 
              hoverImage={Airbrb}
            />
          </Link>
          <PortfolioCard 
            productName="Money Manager" 
            image={MoneyManagerLogo} 
            hoverImage={ParkMate}
          />
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage