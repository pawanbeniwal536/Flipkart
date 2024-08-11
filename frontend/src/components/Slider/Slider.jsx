import React, { useEffect } from 'react';
import getProducts from '../../action/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import HomeItems from './HomeItems';
import CardImg from './CardImg';
import './Slider.css';

const Slider = () => {
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
            <p className='font-black pt-4 pl-5'>Deals of the day</p>
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
      <div className="slider-side-img-container ">
            <img className='slider-side-img' src="https://rukminim1.flixcart.com/www/270/490/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80" alt="aside-image"  />
          </div>
        </div>
        <div className="slider-side-img-container-2 ">
            <img className='slider-side-img-2' src="https://rukminim1.flixcart.com/www/270/490/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80" alt="aside-image"  />
          </div>
          <div className="card-img-slider-container">
            <CardImg/>
          </div>
    </>
  );
};

export default Slider;
