import React, { useState } from 'react'
import './index.css';

const PortfolioCard = ({ productName, nameOfEvent, image, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={isHovered ? hoverImage : image} alt={productName} className="card-image" />
      <h3 className="product-name">{productName}</h3>
      <h3 className="name-of-event">{nameOfEvent}</h3>
    </div>
  )
}

export default PortfolioCard