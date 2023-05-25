/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../index.css'
import Sidebar from '../../../../components/Sidebar'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import QuantSocLogo from '../../../../images/QuantSocLogo.png'
import QuantSoc from '../../../../images/QuantSoc.png'
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { FiFigma } from 'react-icons/fi';
import { BsCalendarEvent } from 'react-icons/bs'

const QuantSocPage = () => {
  const projectPhotos = [
    QuantSocLogo,
    QuantSoc,
    // Add more photo URLs as needed
  ];

  return (
    <div>
      <Sidebar />
      <div className='project-content'>
        <h1 className='title'>UNSW QuantSoc Website</h1>
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
            UNSW QuantSoc Technical Subcomm
          </div>
          <p>The frontend of the main website of the 📈UNSW Quantitative Finance and Trading Society (Quantsoc)</p>
          <div className='icon-containers'>
            <FaReact size={42} color='#61DAFB' className='icon' title='React'/>
            <SiJavascript size={42} color='#F7DF1E' className='icon' title='Javascript'/> 
            <FiFigma size={42} color='#F24E1E' className='icon' title='Figma'/> 
          </div>
          <div className='link-containers'>
            <span>view it on</span>
            <a href="https://github.com/QuantSoc/website" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={42} color='#181717' className='icon' title='Github'/> 
            </a>
            <a href="https://d129a886.website-dk1.pages.dev/" target="_blank" rel="noopener noreferrer">
              <AiOutlineLink size={42} className='icon' title='UNSW QuantSoc'/> 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuantSocPage