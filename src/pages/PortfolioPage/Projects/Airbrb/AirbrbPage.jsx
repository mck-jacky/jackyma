/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../index.css'
import Sidebar from '../../../../components/Sidebar'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AirbrbLogo from '../../../../images/AirbrbLogo.png'
import Airbrb1 from '../../../../images/Airbrb1.png'
import Airbrb2 from '../../../../images/Airbrb.png'
import Airbrb3 from '../../../../images/Airbrb2.png'
import Airbrb4 from '../../../../images/Airbrb3.png'
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsCalendarEvent } from 'react-icons/bs'

const AirbrbPage = () => {
  const projectPhotos = [
    AirbrbLogo,
    Airbrb1,
    Airbrb2,
    Airbrb3,
    Airbrb4
    // Add more photo URLs as needed
  ];

  return (
    <div>
      <Sidebar />
      <div className='project-content'>
        <h1 className='title'>Airbrb</h1>
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
            UNSW COMP6080 Web Front-End Programming
          </div>
          <p>Developed a clone of the popular vaction rental platform, Airbnb, as part of a university assignment.</p>
          <div className='icon-containers'>
            <FaReact size={42} color='#61DAFB' className='icon' title='React'/>
            <SiJavascript size={42} color='#F7DF1E' className='icon' title='Javascript'/> 
          </div>
          <div className='link-containers'>
            {/* <span>view it on</span>
            <a href="https://github.com/2022hackathon/lighthouse" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={42} color='#181717' className='icon' title='Github'/> 
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirbrbPage