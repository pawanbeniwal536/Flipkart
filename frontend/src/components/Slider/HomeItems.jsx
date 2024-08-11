import React from 'react'
import './HomeItems.css'

const HomeItems = ({ url, shortTitle, price }) => {
  return (
    <>
    <div className="home-items-container-heading">
      <div className="home-container-items">
        <div className="home-items-img">
          <img src={url} alt="item image" />
        </div>
        <div className="home-items-sort-title">
          {shortTitle}
        </div>
        <div className="home-items-discount-price">
          <div className="home-items-discount flex justify-evenly">
            {price.discount}
          </div>
          <div className="home-items-price">
            <p>{price.mrp}</p>
            <p>{price.cost}</p>
          </div>
        </div>
      </div>
    </div>
        </>
  )
}

export default HomeItems
