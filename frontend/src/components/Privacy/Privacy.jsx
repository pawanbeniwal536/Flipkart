import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import HomeFooter from '../Slider/HomeFooter';

const Privacy = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h2>

        {/* Introduction Section */}
        <section className="mb-8">
          <p className="text-gray-600 mb-4">
            At Flipkart Clone, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our practices regarding your personal data.
          </p>
        </section>

        {/* Information Collection Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Information We Collect</h3>
          <p className="text-gray-600 mb-4">
            We collect various types of information to provide and improve our services. The information we may collect includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Personal Information: Name, email address, phone number, and payment details.</li>
            <li>Transaction Information: Details of your orders and purchases.</li>
            <li>Technical Information: IP address, browser type, and browsing behavior on our site.</li>
            <li>Cookies and Tracking Data: We use cookies and similar tracking technologies to monitor activity on our service.</li>
          </ul>
        </section>

        {/* Use of Information Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">How We Use Your Information</h3>
          <p className="text-gray-600 mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>To process and manage your orders.</li>
            <li>To communicate with you regarding your orders, offers, and promotions.</li>
            <li>To improve our website, products, and services.</li>
            <li>To detect, prevent, and address technical issues and fraud.</li>
            <li>To comply with legal obligations and enforce our policies.</li>
          </ul>
        </section>

        {/* Information Sharing Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Information Sharing and Disclosure</h3>
          <p className="text-gray-600 mb-4">
            We do not share your personal information with third parties except in the following cases:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>With service providers who assist us in operating our website and conducting our business.</li>
            <li>To comply with legal obligations or to protect the rights, property, or safety of Flipkart Clone, our users, or others.</li>
            <li>In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
            <li>With your consent or at your direction.</li>
          </ul>
        </section>

        {/* Data Security Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Data Security</h3>
          <p className="text-gray-600 mb-4">
            We implement a variety of security measures to ensure the protection of your personal information. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Cookies Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Cookies and Tracking Technologies</h3>
          <p className="text-gray-600 mb-4">
            We use cookies to enhance your experience on our site. Cookies are small data files that are stored on your device when you visit our website. You can control the use of cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our site.
          </p>
        </section>

        {/* Your Rights Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Your Rights</h3>
          <p className="text-gray-600 mb-4">
            You have the right to access, update, or delete your personal information. You can also opt-out of receiving marketing communications from us at any time. If you wish to exercise any of these rights, please contact us at <a href="mailto:privacy@flipkartclone.com" className="text-blue-500 underline">privacy@flipkartclone.com</a>.
          </p>
        </section>

        {/* Changes to Policy Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Privacy Policy</h3>
          <p className="text-gray-600 mb-4">
            We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for any updates. Your continued use of our website after any changes to this policy constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* Contact Information Section */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h3>
          <p className="text-gray-600">
            If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@flipkartclone.com" className="text-blue-500 underline">privacy@flipkartclone.com</a>.
          </p>
        </section>
      </div>
    </div>
    <HomeFooter/>
    </>
  );
};

export default Privacy;
