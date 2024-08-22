import React, { useEffect,useState } from 'react';
import getProducts from '../../action/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import HomeItems from './HomeItems';
import CardImg from './CardImg';
import './Slider.css';

const Slider = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data);
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeUntilMidnight();
      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set the time to midnight
    const timeDiff = midnight - now;

    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return { hours, minutes, seconds };
  }

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <>
    <div className="slider-above-content flex ">
      <div className="slider-container mr-3">
        <div className="slider-vice-container ">
          <div className="tag-line-slider-container flex justify-between">
            <p className='font-black pt-4 pl-5'>Deals of the day</p>
            <p className="countdown-timer pl-5 pt-4 pr-4">End In : 
                {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
              </p>
          </div>
          <div className="home-items-slider-container flex">
            {Array.isArray(data?.data?.data) && data.data.data.map((value) => (
              <HomeItems 
                key={value.id} 
                id={value.id} 
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
