import React, { useState, useEffect } from 'react';
import assuredFlip from '../../asset/cartItem.jpg';
import { Link } from 'react-router-dom';

const CartItems = ({ items, onQuantityChange }) => {
  const [cartItems, setCartItems] = useState(items);
  const [amount,setAmount] = useState(0);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
    localStorage.setItem('Cart', JSON.stringify(newCartItems.map(item => item.id))); // Update localStorage with remaining items
    onQuantityChange(newCartItems); // Notify the parent component
  };

  const increaseQuantity = (id) => {
    alert("You can purchase only one quantity of item because Limited Stoke Available.")
  };

  const decreaseQuantity = (id) => {
    alert('Item quantity cannot be less than one')
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    updateCartItems(updatedItems);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price.cost, 0);
  };

  useEffect(()=>{
  setAmount(calculateTotalAmount())
  },[removeItem])

  return (
    <>
      <div className="cart-all-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item-key flex pt-8 pl-8 pr-8 pb-8">
            <div className="cart-detail-image-cls">
              <img src={item.url} alt={item.title.longTitle} className="item-image-url mr-20" />
              <div className="cart-item-quantity-cls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
            <div className="cart-item-details">
              <h3>{item.title.longTitle}</h3>
              <div className="seller-retailent">
                <p className='pr-2'>Seller RetailNet </p> <img src={assuredFlip} alt="flipkart assured logo" />
              </div>
              <div className="cart-item-price-detail">
                <span>₹{item.price.cost}</span>
                <span><del>₹{item.price.mrp}</del></span>
                <span className="cart-item-discount-detail">{item.price.discount}</span>
              </div>
              <div className="cart-remove-item">
                <button onClick={() => removeItem(item.id)}>REMOVE</button>
              </div>
            </div>
          </div>
        ))}
        <div className="place-order-button-cls">
          <Link to={`/product/flipkart/user/account/make-payment/paypal/secure/payment/${amount}`} className='place-order-button'> PLACE ORDER </Link>
        </div>
      </div>
    </>
  );
};


export default CartItems;
