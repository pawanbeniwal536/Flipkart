import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import HomeFooter from '../Slider/HomeFooter'

const Payment = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Secure Payment System</h2>

        {/* Payment Information Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Payment Options</h3>
          <p className="text-gray-600 mb-6">
            We offer a variety of secure payment options to ensure your shopping experience is convenient and safe. You can choose from credit/debit cards, net banking, UPI, and popular wallets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Credit/Debit Card */}
            <div className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow bg-gradient-to-r from-blue-50 to-blue-100">
              <h4 className="text-lg font-semibold text-gray-800 text-center">Credit/Debit Cards</h4>
              <p className="text-gray-600 text-center mt-2">
                We accept all major credit and debit cards including Visa, Mastercard, and American Express.
              </p>
            </div>

            {/* Net Banking */}
            <div className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow bg-gradient-to-r from-green-50 to-green-100">
              <h4 className="text-lg font-semibold text-gray-800 text-center">Net Banking</h4>
              <p className="text-gray-600 text-center mt-2">
                Pay directly through your bank account via our secure net banking option.
              </p>
            </div>

            {/* UPI */}
            <div className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow bg-gradient-to-r from-yellow-50 to-yellow-100">
              <h4 className="text-lg font-semibold text-gray-800 text-center">UPI</h4>
              <p className="text-gray-600 text-center mt-2">
                Use your UPI ID to make quick and secure payments directly from your bank account.
              </p>
            </div>

            {/* Wallets */}
            <div className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow bg-gradient-to-r from-purple-50 to-purple-100">
              <h4 className="text-lg font-semibold text-gray-800 text-center">Digital Wallets</h4>
              <p className="text-gray-600 text-center mt-2">
                We accept payments through popular wallets such as Paytm, PhonePe, and Google Pay.
              </p>
            </div>

            {/* EMI */}
            <div className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow bg-gradient-to-r from-red-50 to-red-100">
              <h4 className="text-lg font-semibold text-gray-800 text-center">EMI Options</h4>
              <p className="text-gray-600 text-center mt-2">
                Flexible EMI options are available on select credit cards for easier payments.
              </p>
            </div>

            {/* Cash on Delivery */}
            <div className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow bg-gradient-to-r from-pink-50 to-pink-100">
              <h4 className="text-lg font-semibold text-gray-800 text-center">Cash on Delivery</h4>
              <p className="text-gray-600 text-center mt-2">
                Pay with cash at the time of delivery. Available for select locations only.
              </p>
            </div>
          </div>
        </div>

        {/* Security Information Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Security</h3>
          <p className="text-gray-600">
            Your security is our priority. Our payment gateway is fully encrypted and PCI-DSS compliant, ensuring that your payment details are safe. We also offer 3D secure authentication for an added layer of security.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">How do I pay using my credit/debit card?</h4>
              <p className="text-gray-600">
                Select 'Credit/Debit Card' on the payment page, enter your card details, and follow the on-screen instructions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Is my payment information secure?</h4>
              <p className="text-gray-600">
                Absolutely. All payment transactions are encrypted, and we comply with the highest industry standards.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Can I pay using EMI?</h4>
              <p className="text-gray-600">
                Yes, EMI options are available on select credit cards. You'll see the EMI option during the payment process.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">What is the Cash on Delivery (COD) option?</h4>
              <p className="text-gray-600">
                With COD, you can pay with cash when your order is delivered. This option is available for select locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeFooter/>
    </>
  );
};

export default Payment;
