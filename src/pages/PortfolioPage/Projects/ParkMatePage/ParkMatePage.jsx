/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../index.css'
import Sidebar from '../../../../components/Sidebar'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ParkMateLogo from '../../../../images/ParkMateLogo.jpg'
import ParkMate1 from '../../../../images/ParkMate1.png'
import ParkMate2 from '../../../../images/ParkMate2.png'
import ParkMate3 from '../../../../images/ParkMate3.png'
import ParkMate4 from '../../../../images/ParkMate4.png'
import ParkMate5 from '../../../../images/ParkMate5.png'
import ParkMate6 from '../../../../images/ParkMate6.png'
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiDevpost } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { FiFigma } from 'react-icons/fi';
import { BsCalendarEvent } from 'react-icons/bs'

const ParkMatePage = () => {
  const projectPhotos = [
    ParkMateLogo,
    ParkMate1,
    ParkMate2,
    ParkMate3,
    ParkMate4,
    ParkMate5,
    ParkMate6,
    // Add more photo URLs as needed
  ];

  return (
    <div>
      <Sidebar />
      <div className='project-content'>
        <h1 className='title'>ParkMate</h1>
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
              SYNCS Hack 2022
            </div>
            <p>ParkMate is a website (hopefully an app in the future) that provides the ‘search and book’ function of the available listed car spots. The owners of parking lots can register their spaces through ParkMate to get potential rental deals and the estimated rental value of the area in real time. The match function allows the flexibility in finding a car space available in drivers’ preferred schedules (i.e., every Monday, Tuesday and Friday), in response to change of work mode.</p>          
            <div className='icon-containers'>
            <FaReact size={42} color='#61DAFB' className='icon' title='React'/>
            <SiJavascript size={42} color='#F7DF1E' className='icon' title='Javascript'/> 
            <FiFigma size={42} color='#F24E1E' className='icon' title='Figma'/> 
            </div>
          <div className='link-containers'>
            <span>view it on</span>
            <a href="https://github.com/mck-jacky/syncs-hack-2022-ParkMate" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={42} color='#181717' className='icon' title='Github'/> 
            </a>
            <a href="https://syncs-hack-2022.devpost.com/" target="_blank" rel="noopener noreferrer">
              <SiDevpost size={42} color='#1785FB' className='icon' title='Devpost'/> 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParkMatePage