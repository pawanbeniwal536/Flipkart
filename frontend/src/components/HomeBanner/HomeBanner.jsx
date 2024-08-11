import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './HomeBanner.css';
import bannerData from '../Data/bannerData.json';


const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const leftClickHandle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
    );
  };

  var rightClickHandle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length)
  }

  const bannerImg = bannerData[currentIndex]?.url;


  
  return (
    <div className="home-banner-container mt-4 ">
      <div className="icon-left" onClick={leftClickHandle}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="banner-home-img flex-row justify-center items-center ">
        <img className='pr-3 pl-3' src={bannerImg} alt='Banner' />
        <div className="banner-bullets">
          <div className="banner-bullet " text-center>
            <FontAwesomeIcon className={currentIndex === 0 ? 'text-black' :''} icon={faCircleDot} />
          </div>
          <div className="banner-bullet " text-center>
            <FontAwesomeIcon className={currentIndex === 1 ? 'text-black' :''} icon={faCircleDot} />
          </div>
          <div className="banner-bullet " text-center>
            <FontAwesomeIcon className={currentIndex === 2 ? 'text-black' :''} icon={faCircleDot} />
          </div>
          <div className="banner-bullet " text-center>
            <FontAwesomeIcon className={currentIndex === 3 ? 'text-black' :''} icon={faCircleDot} />
          </div>
        </div>
      </div>
      <div className="icon-right" onClick={rightClickHandle}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default HomeBanner;