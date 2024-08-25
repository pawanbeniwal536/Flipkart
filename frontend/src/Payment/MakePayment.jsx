import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import './Payment.css'
import Navbar2 from '../components/Navbar2/Navbar2'


let initialOptions = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  currency: "USD"
};

const MakePayment = () => {

  const { amount } = useParams()
  console.log('the amount of the user is the ',amount);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const createOrder = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch("http://localhost:5000/payment/paypal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart: [{ id: "product2", quantity: "2" }],
        }),
      });

      const orderData = await response.json();

      if (!orderData.id) {
        throw new Error("Order ID is missing from the response");
      }

      return orderData.id;

    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }finally{
      setLoading(false)
    }
  };

  const onApprove = async (data, actions) => {
    setLoading(true)
    try {
      let details = await actions.order.capture().then((details)=>{
      navigate(`/payment-success`, { state: { details } });
      });

    } catch (error) {
      console.error('error captureing order: ',error);
    }finally
    {
      setLoading(false)
    }
  };
  
  const onError = (err) => {
    console.error('PayPal error:', err);
    navigate('/payment-cancelled')
    setLoading(false)
  }
  return (
    <>
          <Navbar2 />
      <div className='payment-page'>
        {loading && (
          <div className="loading-overlay">
            <div className="loading-content">
              <div className="spinner"></div>
              <p>Processing your payment...</p>
            </div>
          </div>
        )}
        <div className="payment-container">
          <h2 className="payment-title">Complete Your Payment</h2>
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  );
}

export default MakePayment
