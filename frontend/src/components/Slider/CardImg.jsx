import React from 'react'
import './CardImg.css'
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../action/getProducts';
import { useEffect } from 'react';
import HomeItems from './HomeItems';

const CardImg = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.data);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <div className="home-cards-container flex-col mt-3">
                <div className="home-card-items-1 flex">
                    <div className="slider-images p-1">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/e4857495b5d2e5a2.jpg?q=20" alt="image" />
                    </div>
                    <div className="slider-images p-1">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/46b1583bf8325f32.jpg?q=20" alt="image" />
                    </div>
                    <div className="slider-images p-1">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/71a317fc5548e629.jpg?q=20" alt="image" />
                    </div>
                </div>

                <div className="home-card-items-2 flex">
                    <div className="slider-images p-1">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9926b000d9e06f79.jpg?q=20" alt="image" />
                    </div>
                    <div className="slider-images p-1">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6f23fc1a646a9c64.jpg?q=20" alt="image" />
                    </div>
                    <div className="slider-images p-1">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/da7e1d1c9590597d.jpg?q=20" alt="image" />
                    </div>
                </div>
                <div className="bottom-poster-img mt-2">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20" alt="bottom-poster" />
                </div>
            </div>

            <div className="call-all-items">
                <div className="top-deals mt-3">
                    <div className="top-deals-heading">
                        <h2 className='pl-4'>Top Deals On Appliances</h2>
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

{/* // second call from here  */}
<div className="top-deals mt-3">
                    <div className="top-deals-heading">
                        <h2 className='pl-4'>Best Fashion Brand For You</h2>
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

{/* third call from here  */}
<div className="top-deals mt-3">
                    <div className="top-deals-heading">

                        <h2 className='pl-4'>Recently Viewed</h2>
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
    )
}

export default CardImg
