import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMagnifyingGlass, faChevronDown, faCartShopping, faBell, faHeadset, faRectangleAd, faDownload, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Navbar2.css';

const user = localStorage.getItem('Profile');

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav2-super-container">
            <div className="nav2-child-container shadow-md">
                <div className="nav2-header-class flex items-center justify-between h-14 px-4">
                    <div className="nav2-logo-input flex items-center space-x-4">
                        <Link to='/' className="logo-images flex flex-col hover:cursor-pointer">
                            <div className="flipname-image">
                                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart-image" className='h-4 ml-28' />
                            </div>
                            <div className="fliplogo-down-content ml-28 flex">
                                <div className="explore-text text-slate-100">Explore</div>
                                <div className="plus-text text-amber-200 pl-1">Plus</div>
                                <div className="flip-nav2-img"><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" /></div>
                            </div>
                        </Link>
                        <div className="nav2-input relative flex items-center w-full max-w-2xl">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 text-blue-600" />
                            <input
                                type="text"
                                placeholder="Search for products, brands and more"
                                className="w-full pl-10 pr-4 py-2 bg-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="nav2-right-flex text-sm flex items-center space-x-12 mr-4 md:mr-28">
                        <div className="login-user bg-white w-28 h-7 flex items-center justify-center hover:cursor-pointer">
                            {user ? (
                                <Link to='/account/user-profile' className="text-gray-700 text-blue-600 font-medium">Account</Link>
                            ) : (
                                <Link to='/account/login' className="text-gray-700 text-blue-600 font-medium">Login</Link>
                            )}
                        </div>

                        <div className="become-a-seller-cls flex items-center space-x-2 hover:cursor-pointer">
                            <p className="seller-class text-gray-700 text-white font-semibold">Become a Seller</p>
                        </div>

                        <div className="class-for-more flex items-center relative">
                            <span className='text-white font-semibold cursor-pointer'>More</span>
                            <FontAwesomeIcon
                                className={`nav2-arrow-same-cls text-white pl-1 pt-0.5 ${isMenuOpen ? 'hidden' : ''}`}
                                icon={faChevronDown}
                                onClick={toggleMenu}
                            />
                            <FontAwesomeIcon
                                className={`nav2-arrow-same-cls text-white pl-1 pt-0.5 ${isMenuOpen ? '' : 'hidden'}`}
                                icon={faChevronUp}
                                onClick={toggleMenu}
                            />
                            <div className={`nav2-login-hover absolute w-56 top-14 right-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
                                <div className="triangle absolute left-24"></div>
                                <div className="hover-content text-blue-700">
                                    <div className="notification flex justify-around h-12 items-center border-b pl-1 hover:bg-slate-100">
                                        <FontAwesomeIcon icon={faBell} />
                                        <p className='text-black'>Notification Preferences</p>
                                    </div>
                                    <div className="customer-care flex justify-around h-12 items-center border-b hover:bg-slate-100">
                                        <FontAwesomeIcon icon={faHeadset} />
                                        <p className='text-black'>24x7 Customer Care</p>
                                    </div>
                                    <div className="advertise flex justify-around h-12 items-center border-b pr-16 hover:bg-slate-100">
                                        <FontAwesomeIcon icon={faRectangleAd} />
                                        <p className='text-black'>Advertise</p>
                                    </div>
                                    <div className="download-app flex justify-around h-12 items-center border-b mr-10 hover:bg-slate-100 w-full pr-8">
                                        <FontAwesomeIcon icon={faDownload} />
                                        <p className='text-black'>Download App</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nav2-cart-img flex items-center space-x-2 hover:cursor-pointer">
                            <FontAwesomeIcon className="text-white" icon={faCartShopping} />
                            <p className="text-gray-700 text-white font-semibold">Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
