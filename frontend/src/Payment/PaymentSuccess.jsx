import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar2 from '../components/Navbar2/Navbar2'; // Adjust import path as needed

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { details } = location.state || {};

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <div className="flex-grow flex items-center justify-center p-4">
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-0 text-center transform transition-all duration-500 ease-in-out hover:scale-105"
          >
            <h2 className="text-4xl font-bold mb-6 text-green-600 animate-bounce">
              Payment Successful
            </h2>
            {details ? (
              <>
                <p className="text-lg text-gray-700 mb-4">
                  Thank you for your payment,{' '}
                  <span className="font-semibold text-blue-600">
                    {details.payer.name.given_name}
                  </span>
                  !
                </p>
                <div className="text-left mb-6">
                  <p className="text-sm text-gray-500">Transaction ID:</p>
                  <p className="text-lg font-medium text-gray-900">
                    {details.id}
                  </p>
                </div>
                <div className="text-left mb-6">
                  <p className="text-sm text-gray-500">Amount Paid:</p>
                  <p className="text-lg font-medium text-gray-900">
                  Rs {details.purchase_units[0].amount.value}
                  </p>
                </div>
                <div className="text-left mb-6">
                  <p className="text-sm text-gray-500">Payment Status:</p>
                  <p className="text-lg font-medium text-gray-900">
                    {details.status}
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => navigate('/')}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition transform duration-300 hover:scale-105"
                  >
                    Go to Home
                  </button>
                </div>
              </>
            ) : (
              <p className="text-white animate-pulse">Loading payment details...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
