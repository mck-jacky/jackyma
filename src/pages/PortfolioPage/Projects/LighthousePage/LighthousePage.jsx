/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../index.css'
import Sidebar from '../../../../components/Sidebar'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Lighthouselogo from '../../../../images/lighthouselogo.png'
import Lighthouse from '../../../../images/Lighthouse.png'
import { FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiFigma } from 'react-icons/fi';
import { BsCalendarEvent } from 'react-icons/bs'

const LighthousePage = () => {
  const projectPhotos = [
    Lighthouselogo,
    Lighthouse,
    // Add more photo URLs as needed
  ];

  return (
    <div>
      <Sidebar />
      <div className='project-content'>
        <h1 className='title'>Lighthouse</h1>
        <hr className='divider' />
        <div className="carousel-container">
          <Carousel autoPlay infiniteLoop>
            {projectPhotos.map((photo, index) => (
              <div key={index}>
                <img src={photo} alt={`Project Photo ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='project-description'>
          <div className='project-event'>
            <BsCalendarEvent size={24} className='icon'/>
            UNSW CSESoc Annual Flagshop Hackathon - 2nd Place
          </div>
          <p>Lighthouse is a powerful tool that aggregates and manages data from various social media platforms including Instagram, Facebook, and Twitter. Employing smart algorithms, it identifies and prioritizes the most relevant information for users, presenting it in a user-friendly interface.</p>
          <p>Additionally, Lighthouse features a robust content filtering system that eliminates harmful messages, enhancing the safety and experience of social media usage. This strategic design not only alleviates users' fear of missing out but also conserves time spent on social media platforms, ensuring a safe, efficient, and inclusive digital environment.</p>
          <div className='icon-containers'>
            <FaReact size={42} color='#61DAFB' className='icon' title='React'/>
            <SiJavascript size={42} color='#F7DF1E' className='icon' title='Javascript'/> 
            <FiFigma size={42} color='#F24E1E' className='icon' title='Figma'/> 
            <FaPython size={42} color='#3776AB' className='icon' title='Python'/> 
          </div>
          <div className='link-containers'>
            <span>view it on</span>
            <a href="https://www.linkedin.com/posts/csesoc_csesochackathon2022-technology-media-activity-6957262643879436288-uF9J/?trk=public_profile_like_view&originalSubdomain=au" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={42} color='#0077B5' className='icon' title='LinkedIn'/> 
            </a>
            <a href="https://github.com/2022hackathon/lighthouse" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={42} color='#181717' className='icon' title='Github'/> 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LighthousePage