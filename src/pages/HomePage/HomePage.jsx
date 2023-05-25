import React from 'react'
import Sidebar from '../../components/Sidebar'
import './index.css';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <Sidebar />
      <div className="home-page-content">
        <h1 className='name'>Jacky Ma</h1>
        <p className='text'>
          <span className="typing-text-wrapper">
            <span className="start-text">I'm</span>
            <span className="typing-text"> a UNSW Final Year CS Student</span>
          </span>
        </p>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/jacky-ma-6a0631204" target="_blank" rel="noopener noreferrer" className='social-links-icon'>
            <LinkedinOutlined />
          </a>
          <a href="https://github.com/mck-jacky" target="_blank" rel="noopener noreferrer" className='social-links-icon'>
            <GithubOutlined />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage