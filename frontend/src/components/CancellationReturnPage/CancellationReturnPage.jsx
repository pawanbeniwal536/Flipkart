import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import HomeFooter from '../Slider/HomeFooter';

const CancellationReturnPage = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Cancellation & Return Policy</h2>

        {/* Cancellation Policy Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Order Cancellation</h3>
          <p className="text-gray-600 mb-4">
            At Flipkart Clone, we strive to deliver your orders as quickly as possible. You can cancel your order before it is shipped. If your order has been shipped, it cannot be canceled. You can initiate a return after the item has been delivered to you.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>You can cancel your order by logging into your account and going to 'My Orders'.</li>
            <li>Once the order is canceled, the full amount will be refunded to your original payment method within 7 business days.</li>
            <li>If your order has already been shipped, you can refuse to accept it upon delivery.</li>
          </ul>
        </section>

        {/* Return Policy Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Return Policy</h3>
          <p className="text-gray-600 mb-4">
            We understand that you may occasionally want to return your items. You can initiate a return for most items within 10 days of delivery for a full refund. Items must be returned in their original condition, with all tags and packaging intact.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Log into your account and navigate to 'My Orders'.</li>
            <li>Select the item you want to return and choose the reason for the return.</li>
            <li>Our courier partner will pick up the item within 2-3 business days of your return request.</li>
            <li>Once the item is received and inspected, the refund will be processed to your original payment method within 7-10 business days.</li>
          </ul>
        </section>

        {/* Exceptions Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Exceptions to Return Policy</h3>
          <p className="text-gray-600 mb-4">
            Certain items are not eligible for return, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Items that are perishable or have a limited shelf life.</li>
            <li>Personalized or custom-made products.</li>
            <li>Products that have been used or are not in their original condition.</li>
            <li>Items marked as 'Non-returnable' on the product detail page.</li>
          </ul>
          <p className="text-gray-600">
            If you receive a damaged or defective item, please contact our customer service within 48 hours of delivery for a replacement or refund.
          </p>
        </section>

        {/* Refund Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Refunds</h3>
          <p className="text-gray-600 mb-4">
            Refunds will be processed after the returned item is received and inspected. The refund amount will be credited to your original payment method or Flipkart Clone Wallet within 7-10 business days.
          </p>
          <p className="text-gray-600">
            For COD (Cash on Delivery) orders, the refund will be processed to your bank account or Flipkart Clone Wallet, as per your preference.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Need Help?</h3>
          <p className="text-gray-600">
            If you have any questions about our cancellation and return policy, please feel free to contact our customer service team at <a href="mailto:support@flipkartclone.com" className="text-blue-500 underline">pawanbeniwal012@gmail.com</a> or call us at 7900956259.
          </p>
        </section>
      </div>
    </div>
    <HomeFooter/>
    </>
  );
};

export default CancellationReturnPage;
