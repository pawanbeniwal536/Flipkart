import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('Profile'));
  const id = user?._id;
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartQuantity, setCartQuantity] = useState(0); // State to manage cart quantity

  const items = useSelector((state) => state.products.data);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = items?.data?.data?.filter((item) =>
        item.title.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [searchQuery, items]);

  useEffect(() => {
    // Fetch cart quantity from localStorage
    const cart = JSON.parse(localStorage.getItem('Cart')) || [];
    const totalQuantity = cart.length;
    setCartQuantity(totalQuantity);
  }, []);

  return (
    <>
      <div className="super-container">
        <div className="child-container bg-white shadow-md">
          <div className="header-class flex items-center justify-between h-16 px-4">
            <div className="nav-logo flex items-center space-x-4">
              <Link to='/'>
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                  alt="Flipkart-logo"
                  className="h-8"
                />
              </Link>
              <div className="nav-for-pc nav-input relative flex items-center w-full max-w-2xl">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for Products, Brands and More"
                  className="input-cls-for-nav w-full pl-10 pr-4 py-2 bg-blue-50 rounded-md focus:outline-none focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="nav-right-flex text-sm flex items-center space-x-12">
              <div className="nav-login-user flex items-center space-x-2 hover:cursor-pointer hover:bg-blue-800 h-8 pl-5 w-28 hover:text-white">
                <FontAwesomeIcon icon={faUser} />
                {
                  !user ?
                    <Link to='/account/login' className='text-gray-700 login-text-nav1'>Login</Link>
                    :
                    <Link to={`/account/${id}/user-profile`} className='text-gray-700 login-text-nav1'>Account</Link>
                }
              </div>

              <div className="flex items-center space-x-2 cart-image-container">
                <span className="position-relative top-0 start-100 translate-middle badge rounded-pill bg-danger mb-1 ml-2 font-extrabold">
                  {cartQuantity > 0 ? cartQuantity : '0'}
                </span>

                <Link to='/cart-items' className="text-gray-700 cart-cls flex">
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                  alt="cart-logo"
                />
                  <p className='cart-nav-para'>Cart</p>
                </Link>
              </div>

              <div className="flex items-center space-x-2 seller-cls-container">
                <a className='flex' href="https://seller.flipkart.com/index.html#dashboard/sellerOnboarding">
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                    alt="seller-logo"
                    className="h-6"
                  />
                  <p className="text-gray-700 seller-cls pt-1 pl-1">Become a Seller</p>
                </a>
              </div>

              <div className="more-logo-img">
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                  alt="more-logo"
                />
              </div>
            </div>
          </div>
          <div className="responsive-nav-input pr-8 pl-8 pb-2 relative">
            <div className="responsive-nav-input-childs relative">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="pl-10 pr-4 py-2 bg-blue-50 rounded-md focus:outline-none focus:border-blue-500 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Render search results if there are any */}
        {filteredItems.length > 0 && (
          <div className="search-results-container bg-white shadow-md max-w-2xl mx-auto mt-2 p-4 rounded">
            <ul>
              {filteredItems.map((item) => (
                <li key={item.id} className="py-2">
                  <Link to={`/item/${item.id}`} className="text-blue-600 hover:underline">
                    {item.title.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
