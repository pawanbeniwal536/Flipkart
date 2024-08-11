import React from 'react';
import './ItemHeader.css';

const ItemHeader = () => {
  return (
    <>
      <div className="item-header-container h-auto">
        <div className="items-container flex justify-evenly text-sm h-8 items-center font-medium">
          <div className="item1">Electronics</div>
          <div className="item2">TVs & Applances</div>
          <div className="item3">Men</div>
          <div className="item4">Women</div>
          <div className="item5">Item & Kids</div>
          <div className="item6">Home & Furniture</div>
          <div className="item7">Sports, Books & More</div>
          <div className="item8">Flights</div>
          <div className="item9">Offer Zone</div>
        </div>
      </div>
    </>
  )
}

export default ItemHeader
