import React from 'react';
import navData from '../Data/navData.json';
import './HomeHeader.css';

const HomeHeader = () => {
  return (
    <div className="container-home-header flex ml-4 mr-4 pl-16 pr-16 pt-4 pb-4 mt-2 justify-between overflow-x-auto">
      {navData.map((item, index) => (
        <div key={index} className="nav-item flex-none w-32">
          <img className="h-20 mx-auto" src={item.url} alt={item.text} />
          <p className="text-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default HomeHeader;
