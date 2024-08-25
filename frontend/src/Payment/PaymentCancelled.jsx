import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../components/Navbar2/Navbar2'; // Adjust import path as needed

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-red-400 via-yellow-500 to-orange-600">
        <div className="flex-grow flex items-center justify-center p-4">
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-0 text-center transform transition-all duration-500 ease-in-out hover:scale-105"
          >
            <h2 className="text-4xl font-bold mb-6 text-red-600 animate-shake">
              Payment Cancelled
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Unfortunately, your payment could not be completed.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Please try again or contact support if you need assistance.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition transform duration-300 hover:scale-105"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCancel;
