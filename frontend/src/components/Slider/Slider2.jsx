import React, { useEffect } from 'react';
import getProducts from '../../action/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import HomeItems from './HomeItems';
import './Slider.css';

const Slider = ({title}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
    <div className="slider-above-content flex ">
      <div className="slider-container mr-3">
        <div className="slider-vice-container ">
          <div className="tag-line-slider-container">
            <p className='font-black pt-4 pl-5'>{title}</p>
          </div>
          <div className="home-items-slider-container flex">
            {Array.isArray(data?.data?.data) && data.data.data.map((value) => (
              <HomeItems 
                key={value.id} 
                url={value.url} 
                shortTitle={value.title.shortTitle}
                price={value.price}
              />
            ))}
          </div>
        </div>
      </div>
        </div>
    </>
  );
};

export default Slider;
