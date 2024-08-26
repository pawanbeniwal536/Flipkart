import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import HomeFooter from '../Slider/HomeFooter';

const ShippingPage = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shipping Information</h2>

        {/* Shipping Overview Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Shipping Overview</h3>
          <p className="text-gray-600 mb-4">
            At Flipkart Clone, we aim to deliver your orders in the fastest and most efficient manner possible. We offer various shipping options to meet your needs, including standard, expedited, and same-day delivery in select locations.
          </p>
        </section>

        {/* Shipping Options Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Shipping Options & Delivery Times</h3>
          <table className="w-full mb-4 border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 py-2 text-left text-gray-700">Shipping Method</th>
                <th className="border-b-2 py-2 text-left text-gray-700">Estimated Delivery Time</th>
                <th className="border-b-2 py-2 text-left text-gray-700">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2 text-gray-600">Standard Shipping</td>
                <td className="border-b py-2 text-gray-600">5-7 Business Days</td>
                <td className="border-b py-2 text-gray-600">Free</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-gray-600">Expedited Shipping</td>
                <td className="border-b py-2 text-gray-600">2-3 Business Days</td>
                <td className="border-b py-2 text-gray-600">$4.99</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-gray-600">Same-Day Delivery</td>
                <td className="border-b py-2 text-gray-600">Same Day</td>
                <td className="border-b py-2 text-gray-600">$9.99</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-600">
            Please note that delivery times may vary depending on your location, the availability of the product, and other factors.
          </p>
        </section>

        {/* Tracking Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Order Tracking</h3>
          <p className="text-gray-600 mb-4">
            Once your order has been shipped, you will receive an email with a tracking number and a link to track your package. You can also track your order by logging into your account and visiting the 'My Orders' section.
          </p>
          <p className="text-gray-600">
            If you encounter any issues with tracking your order, please contact our customer service team for assistance.
          </p>
        </section>

        {/* Shipping Restrictions Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Shipping Restrictions</h3>
          <p className="text-gray-600 mb-4">
            We currently ship only within the country. Some locations may have additional restrictions or fees, which will be noted during the checkout process. We do not ship to P.O. boxes or APO/FPO addresses.
          </p>
          <p className="text-gray-600">
            Certain items may also have additional shipping restrictions due to size, weight, or regulations.
          </p>
        </section>

        {/* International Shipping Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">International Shipping</h3>
          <p className="text-gray-600 mb-4">
            Currently, we do not offer international shipping. We are working on expanding our services to include international destinations in the future. Please stay tuned for updates.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Need Help?</h3>
          <p className="text-gray-600">
            If you have any questions about our shipping options or need help with your order, please feel free to contact our customer service team at <a href="mailto:support@flipkartclone.com" className="text-blue-500 underline">pawanbeniwal012@gmail.com</a> or call us at 7900956259.
          </p>
        </section>
      </div>
    </div>
    <HomeFooter/>
    </>
  );
};

export default ShippingPage;
