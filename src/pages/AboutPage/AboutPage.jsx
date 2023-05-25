import React from 'react'
import './index.css'
import Sidebar from '../../components/Sidebar'
import profilePicture from '../../images/Profile2.jpg'
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const AboutPage = () => {
  return (
    <div className='about-me-page'>
      <Sidebar />
      <div className='about-me-content'>
        <div className='about-me-text'>
          <h3 className='text-1'>Hi, I am</h3>
          <h1 className='text-2'>Jacky Ma</h1>
          <h2 className='text-3'>Final year Computer Science Student @UNSW</h2>
          <p className='text-4'>Passionate CS student in my final year at UNSW, actively seeking opportunities to leverage and enhance my skills. I've gained versatile experiences through participating in trading, hackathons, and programming competitions. In my spare time, I broaden my horizons as a Business Development Manager in real estate.</p>
          <div className='contact-link-containers'>
            <a href="mailto:machakki23@gmail.com">
              <AiOutlineMail size={42} color='black' className='icon' title='Email'/>
            </a>
            <a href="https://www.linkedin.com/in/jacky-ma-6a0631204" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={42} color='#0A66C2' className='icon' title='LinkedIn'/> 
            </a>  
            <a href="https://github.com/mck-jacky" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={42} color='#181717' className='icon' title='Github'/> 
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <img src={profilePicture} alt='Profile' />
        </div>
      </div>
    </div>
  )
}

export default AboutPage