/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../index.css'
import Sidebar from '../../../../components/Sidebar'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiDevpost } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { FiFigma } from 'react-icons/fi';
import { BsCalendarEvent } from 'react-icons/bs'
import YOLO1 from '../../../../images/YOLO1.png'
import YOLO2 from '../../../../images/YOLO2.png'
import YOLO3 from '../../../../images/YOLO3.png'
import YOLO4 from '../../../../images/YOLO4.png'
import YOLO5 from '../../../../images/YOLO5.png'
import YOLO6 from '../../../../images/YOLO6.png'
import YOLO7 from '../../../../images/YOLO7.png'
import YOLO8 from '../../../../images/YOLO8.png'
import YOLO9 from '../../../../images/YOLO9.png'
import YOLOLogo from '../../../../images/YOLOLogo.png'

const YOLOPage = () => {
  const projectPhotos = [
    YOLOLogo,
    YOLO1,
    YOLO2,
    YOLO3,
    YOLO4,
    YOLO5,
    YOLO6,
    YOLO7,
    YOLO8,
    YOLO9,
  ];

  return (
    <div>
      <Sidebar />
      <div className='project-content'>
        <h1 className='title'>YOLO</h1>
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
              UNSW 2023 CSESoc Annual Flagshop Hackathon - 3rd Place
            </div>
            <p>YOLO is an innovative travel solution that personalizes itineraries based on your appetite for risk. Utilizing Google Maps' global points of interest, each assigned with a risk rating (YOLO rating), the solution caters to those that want to escape the confines of post-lockdown.</p>          
            <div className='icon-containers'>
            <FaReact size={42} color='#61DAFB' className='icon' title='React'/>
            <SiJavascript size={42} color='#F7DF1E' className='icon' title='Javascript'/> 
            <FiFigma size={42} color='#F24E1E' className='icon' title='Figma'/> 
            </div>
          <div className='link-containers'>
            <span>view it on</span>
            <a href="https://github.com/mck-jacky/YOLO" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={42} color='#181717' className='icon' title='Github'/> 
            </a>
            <a href="https://devpost.com/software/yolo-e0wi7l" target="_blank" rel="noopener noreferrer">
              <SiDevpost size={42} color='#1785FB' className='icon' title='Devpost'/> 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YOLOPage