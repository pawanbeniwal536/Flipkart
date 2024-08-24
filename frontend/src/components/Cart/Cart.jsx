import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import Navbar2 from '../Navbar2/Navbar2';
import CartItems from './CartItems';
import getProducts from '../../action/getProducts';

const Cart = () => {
    const [item, setItem] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice , setTotalPrice ] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const dispatch = useDispatch();

    const products = JSON.parse(localStorage.getItem('Cart')) || [];
    let items = useSelector((state) => state.products.data);

    useEffect(() => {
        // dispatch(getProducts())
        if (items) {
            const storedItems = items?.data?.data?.filter(item => products.includes(item.id));
            setItem(storedItems);
        }
    }, [products, items]);

    useEffect(() => {
        if (item.length > 0) {
            let total = 0;
            let discountTotal = 0;
            let totalPrice = 0;
            let itemTotalPrice = 0;
            item.forEach((product) => {
                 itemTotalPrice += product.price.mrp * product.quantity;
                const itemDiscount = (product.price.mrp - product.price.cost) * product.quantity;
                totalPrice += product.price.cost * product.quantity;
                discountTotal += itemDiscount;
                total += itemTotalPrice;
            });
            setTotalPrice(itemTotalPrice)
            setTotalItems(item.reduce((acc, curr) => acc + curr.quantity, 0));
            setDiscount(discountTotal);
            setTotalAmount(totalPrice );
        }
    }, [item]);

    const handleQuantityChange = (updatedItems) => {
        setItem(updatedItems);
    };

    return (
        <>
            <Navbar2 />
            {
                item.length > 0 ? (
                    <>
                        <div className="carts-detail-container flex">
                            <div className="call-cart-items">
                                <div className="cart-total-num-heading"> My Cart ({totalItems})</div>
                                <CartItems items={item} onQuantityChange={handleQuantityChange} />
                            </div>
                            <div className="price-details-cls">
                                <div className="price-details-heading">PRICE DETAILS</div>
                                <div className="price-details-content">
                                    <div className='flex justify-between pt-4'>
                                        <p>Price ({totalItems})</p>
                                        <p>{totalPrice}</p>
                                    </div>
                                    <div className='flex justify-between pt-4'>
                                        <p>Discount</p>
                                        <p>-₹{discount}</p>
                                    </div>
                                    <div className='flex justify-between pt-4'>
                                        <p>Delivery Charges </p>
                                        <p>Free</p>
                                    </div>
                                    <div className='flex justify-between pt-4'>
                                        <h2>Total Amount</h2>
                                        <h2>₹{totalAmount}</h2>
                                    </div>
                                    <p className='discount-save-para text-green-600'>You will Save ₹{discount} on this order</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="empty-cart-container">
                        <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="Empty Cart" className="empty-cart-image" />
                        <h2 className="empty-cart-heading">Your Cart is Empty</h2>
                        <p className="empty-cart-text">It looks like you haven't added any items to your cart yet.</p>
                        <button className="empty-cart-button" onClick={() => window.location.href = '/'}>Continue Shopping</button>
                    </div>
                )
            }
        </>
    );
};

export default Cart;