import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from '../Navbar2/Navbar2';
import ItemHeader from '../ItemHeader/ItemHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import HomeFooter from '../Slider/HomeFooter'
import { useNavigate,Link } from 'react-router-dom';
import './ItemDetails.css';
import getProducts from '../../action/getProducts';


const ItemDetails = () => {
  const { id } = useParams(); // Get the item id from the URL
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.data);
  const [item, setItem] = useState(null); // State to store the filtered item
  const [screenWidth, setScreenWidth] = useState(false);
  const [pincode, setPincode] = useState(''); // State to store the pincode entered by the user
  const [enteredPincode, setEnteredPincode] = useState(''); // State to manage the entered pincode
  const [deliveryDate, setDeliveryDate] = useState(''); // State to store the calculated delivery date
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setScreenWidth(false);
      } else {
        setScreenWidth(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    // Countdown timer logic
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          return 20 * 60; // Reset to 20 minutes in seconds
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup the timer interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // check item is already added in cart or not
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('Cart'));
    if (localData) {
      const filteredData = localData.find((item) => item === id)
      if (filteredData) {
        setIsInCart(true)
      }
      else {
        setIsInCart(false)
      }
    }
  }, [id, items])


  useEffect(() => {
    dispatch(getProducts());
    if (items?.data?.data) {
      const arr = items.data.data;
      const filterItem = arr.find((val) => val.id === id);
      setItem(filterItem);
    }
  }, [id, items]);

  if (!item) {
    return <div>Item not found</div>;
  }


  // Handle pincode input change
  const handlePincodeChange = (e) => {
    setEnteredPincode(e.target.value);
  };

  // Handle pincode check
  const handleCheckPincode = () => {
    if (enteredPincode) {
      setPincode(enteredPincode);

      // Calculate the delivery date (current date + 3 days)
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 3);
      const deliveryDateString = currentDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        weekday: 'long',
      });
      setDeliveryDate(`Delivery by ${deliveryDateString}`);
    } else {
      setDeliveryDate('Enter pincode to check delivery in your area');
    }
  };

  // Handle pincode change
  const handlePincodeChangeButton = () => {
    setEnteredPincode('');
    setPincode('');
    setDeliveryDate('');
  };

  // Function to format time in MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };



  const handleCart = () => {
    // Retrieve the existing cart from localStorage, or start with an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('Cart')) || [];

    // Check if the item is already in the cart
    if (!cart.includes(id)) {
      // If the item is not in the cart, add it
      cart.push(id);

      // Save the updated cart back to localStorage
      localStorage.setItem('Cart', JSON.stringify(cart));
    }
    navigate('/cart-items')
  };


  return (
    <>
      <Navbar2 />
      {!screenWidth && <ItemHeader />}
      <div className="item-details-container">
        <div className="item-details-left">
          <div className="item-image">
            <img src={item.detailUrl} alt={item.title.shortTitle} />
          </div>
          <div className="item-actions">
            <button className="add-to-cart-btn" onClick={handleCart}>{isInCart?'Go to Cart':'Add to Cart' }</button>
            <Link to={`/product/flipkart/user/account/make-payment/paypal/secure/payment/${item.price.cost}`} className="buy-now-btn">Buy Now</Link>
          </div>
        </div>

        <div className="item-details-right">
          <h1 className="item-title">{item.title.shortTitle}</h1>
          <p className="item-description">{item.description}</p>

          <div className="rating-cls">
            {item.rating} <FontAwesomeIcon className='font-rating-icon' icon={faStar} />
          </div>

          <div className="item-price">
            <span className="item-price-special">₹{item.price.cost}</span>
            <span className="item-price-original">₹{item.price.mrp}</span>
            <span className="item-price-discount">{item.price.discount} off</span>
          </div>

          <div className="item-offers">
            <p>Available offers</p>
            <div className="offer-card-detail flex">
              <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="Offers" />
              <p>Partner Offer: </p>
              Make a purchase and enjoy a surprise cashback/coupon that you can redeem later!
            </div>

            <div className="offer-card-detail flex">
              <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="Offers" />
              <p>Combo Offer: </p>
              Buy 2 or more items and save ₹30
            </div>

            <div className="offer-card-detail flex">
              <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="Offers" />
              <p>Special Price: </p>
              Get extra 60% off (price inclusive of cashback/coupon)
            </div>

            <div className="offer-card-detail flex">
              <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="Offers" />
              <p>Bank Offer:</p>
              Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above
            </div>

            <p className='text-blue-500 cursor-pointer'>More offers are Available on this product</p>
          </div>

          {/* New Section for Warranty, Delivery, and Pincode Check */}
          <div className="item-warranty">
            <p><strong>Warranty:</strong> 2 year manufacture Warranty</p>
          </div>
          <div className="item-warranty">
            <p><strong>Seller:</strong> 7 Days Replacement Warranty</p>
          </div>
          <div className="item-delivery">
            <div className="delivery-check flex">
              <strong>Delivery:</strong>
              <div className="delivery-add-cls">
                <lord-icon
                  src="https://cdn.lordicon.com/surcxhka.json"
                  trigger="hover"
                  className='location-icon'
                  style={{ width: '20px', height: '20px', paddingTop: '4px' }}
                >
                </lord-icon>
                <input
                  type="text"
                  placeholder="Enter pincode"
                  value={enteredPincode}
                  onChange={handlePincodeChange}
                />
                {
                  pincode ? (
                    <button className='check-pincode-btn' onClick={handlePincodeChangeButton}>
                      Change
                    </button>
                  ) : (
                    <button className="check-pincode-btn" onClick={handleCheckPincode}>
                      Check Pincode
                    </button>
                  )
                }
              </div>
            </div>
            <p className='font-extrabold'>Free Delivery : If ordered within {formatTime(timeLeft)}</p>
            <p className='font-extrabold'>{deliveryDate || 'Enter pincode to check delivery in your area'}</p>
            <a href="#" className="view-details-link">View Details</a>

            <div className="user-coins-cls">
              <img src="https://rukminim2.flixcart.com/lockin/100/100/images/CCO__PP_2019-07-14.png?q=50" alt="img for usercoins" />
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default ItemDetails;
