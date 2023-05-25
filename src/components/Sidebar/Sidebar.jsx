import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.css';
// eslint-disable-next-line no-unused-vars
import { HomeOutlined, ProjectOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';

const Sidebar = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  return (
    <div>
      <div className='sidebar-desktop'>
        <NavLink
          to="/"
          isActive={() => location.pathname === '/'}
          activeClassName="active"
          className="sidebar-button"
        >
          <HomeOutlined style={{ fontSize: '24px' }} />
          <span className="button-text">Home</span>
        </NavLink>
        <NavLink
          to="/portfolio"
          isActive={() => location.pathname === '/portfolio'}
          activeClassName="active"
          className="sidebar-button"
        >
          <ProjectOutlined style={{ fontSize: '24px' }} />
          <span className="button-text">Portfolio</span>
        </NavLink>
        <NavLink
          to="/about"
          isActive={() => location.pathname === '/about'}
          activeClassName="active"
          className="sidebar-button"
        >
          <UserOutlined style={{ fontSize: '24px' }} />
          <span className="button-text">About</span>
        </NavLink>
      </div>
      <div className='dropdown' ref={menuRef}>
        <MenuOutlined className='dropdown-button' style={{ fontSize: '24px' }} onClick={(event) => toggleDropdown(event)} />
        {isMenuOpen && (
          <div className="dropdown-menu">
            <NavLink
              to="/"
              isActive={() => location.pathname === '/'}
              activeClassName="active"
              className="dropdown-button"
            >
              <HomeOutlined style={{ fontSize: '24px' }} />
            </NavLink>
            <NavLink
              to="/portfolio"
              isActive={() => location.pathname === '/portfolio'}
              activeClassName="active"
              className="dropdown-button"
            >
              <ProjectOutlined style={{ fontSize: '24px' }} />
            </NavLink>
            <NavLink
              to="/about"
              isActive={() => location.pathname === '/about'}
              activeClassName="active"
              className="dropdown-button"
            >
              <UserOutlined style={{ fontSize: '24px' }} />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;