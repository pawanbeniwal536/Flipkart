import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import HomeFooter from '../Slider/HomeFooter';

const Security = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Security at Flipkart Clone</h2>

        {/* Introduction Section */}
        <section className="mb-8">
          <p className="text-gray-600 mb-4">
            At Flipkart Clone, we take the security of our platform and our users' data seriously. We are committed to ensuring that your personal and financial information is protected at all times. Our security practices are designed to provide a safe and secure shopping experience.
          </p>
        </section>

        {/* Data Protection Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Data Protection</h3>
          <p className="text-gray-600 mb-4">
            We implement industry-standard encryption and security protocols to protect your personal data. This includes the use of Secure Socket Layer (SSL) technology to encrypt your information during transmission over the internet. Additionally, we store your data in secure environments with restricted access.
          </p>
        </section>

        {/* Secure Payment Methods Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Secure Payment Methods</h3>
          <p className="text-gray-600 mb-4">
            All transactions on Flipkart Clone are processed through secure and trusted payment gateways. We do not store your payment information on our servers. Instead, we rely on our payment partners to handle transactions securely. We support a variety of payment methods, including credit/debit cards, net banking, and digital wallets, all of which are protected by advanced security measures.
          </p>
        </section>

        {/* Account Security Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Account Security</h3>
          <p className="text-gray-600 mb-4">
            We encourage our users to choose strong and unique passwords for their accounts. You should never share your password with anyone. We also offer two-factor authentication (2FA) as an additional layer of security for your account. If you suspect any unauthorized activity on your account, please contact our support team immediately.
          </p>
        </section>

        {/* Fraud Prevention Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Fraud Prevention</h3>
          <p className="text-gray-600 mb-4">
            Flipkart Clone has implemented sophisticated fraud detection and prevention measures to safeguard your shopping experience. Our systems continuously monitor transactions for suspicious activities, and we may contact you to verify your orders if necessary. If any fraudulent activity is detected, we will take appropriate action to protect your account and prevent unauthorized transactions.
          </p>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Privacy Policy</h3>
          <p className="text-gray-600 mb-4">
            We respect your privacy and are committed to protecting it. Our <a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a> outlines how we collect, use, and protect your information. We do not sell or share your personal data with third parties without your consent, except as required by law.
          </p>
        </section>

        {/* Reporting Security Issues Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Reporting Security Issues</h3>
          <p className="text-gray-600 mb-4">
            If you encounter any security vulnerabilities or suspect any security breaches on our platform, please report them to us immediately. You can reach out to our security team at <a href="mailto:security@flipkartclone.com" className="text-blue-500 underline">security@flipkartclone.com</a>. We take all reports seriously and will investigate them promptly.
          </p>
        </section>

        {/* Conclusion Section */}
        <section>
          <p className="text-gray-600">
            We are dedicated to maintaining a secure environment for our users. Your trust is important to us, and we will continue to enhance our security measures to protect your data and ensure a safe shopping experience on Flipkart Clone.
          </p>
        </section>
      </div>
    </div>
    <HomeFooter/>
    </>
  );
};

export default Security;
