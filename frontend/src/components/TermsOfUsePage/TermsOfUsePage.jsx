import React from 'react';
import Navbar2 from '../Navbar2/Navbar2'
import HomeFooter from '../Slider/HomeFooter';

const TermsOfUsePage = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terms of Use & Conditions</h2>
        
        {/* Introduction Section */}
        <section className="mb-8">
          <p className="text-gray-600 mb-4">
            Welcome to Flipkart Clone. By using our website, you agree to comply with and be bound by the following terms of use and conditions. Please review these terms carefully. If you do not agree to these terms, you should not use this website.
          </p>
        </section>

        {/* Use of Website Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Use of Website</h3>
          <p className="text-gray-600 mb-4">
            By accessing our website, you warrant and represent that you are legally entitled to do so and to make use of the information available on the website. You agree not to use the website for any illegal purposes and to comply with all applicable laws and regulations.
          </p>
          <p className="text-gray-600 mb-4">
            You agree not to use our website in any way that may impair its performance, corrupt its content, or otherwise reduce its overall functionality. You also agree not to compromise the security of the website or attempt to gain access to secured areas or sensitive information.
          </p>
        </section>

        {/* Intellectual Property Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Intellectual Property</h3>
          <p className="text-gray-600 mb-4">
            All content on this website, including text, graphics, logos, icons, images, audio clips, and software, is the property of Flipkart Clone or its content suppliers and is protected by international copyright laws. Unauthorized use of this content is strictly prohibited.
          </p>
        </section>

        {/* User Accounts Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">User Accounts</h3>
          <p className="text-gray-600 mb-4">
            When you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
          </p>
          <p className="text-gray-600 mb-4">
            We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
          </p>
        </section>

        {/* Limitation of Liability Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Limitation of Liability</h3>
          <p className="text-gray-600 mb-4">
            Flipkart Clone will not be liable for any damages of any kind arising from the use of this website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
          </p>
          <p className="text-gray-600 mb-4">
            We do not warrant that the website will be uninterrupted or error-free or that defects will be corrected.
          </p>
        </section>

        {/* Governing Law Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Governing Law</h3>
          <p className="text-gray-600 mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State]. You agree that any legal action or proceeding between you and Flipkart Clone for any purpose concerning these terms and conditions or the parties' obligations hereunder shall be brought exclusively in a court of competent jurisdiction sitting in [Your Country/State].
          </p>
        </section>

        {/* Changes to Terms Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Changes to Terms</h3>
          <p className="text-gray-600 mb-4">
            Flipkart Clone reserves the right to change these terms and conditions at any time. We will notify you of any changes by posting the new terms on this website. Your continued use of the website after such changes have been posted will constitute your acceptance of the revised terms.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h3>
          <p className="text-gray-600">
            If you have any questions about these terms, please contact us at <a href="mailto:support@flipkartclone.com" className="text-blue-500 underline">support@flipkartclone.com</a>.
          </p>
        </section>
      </div>
    </div>
    <HomeFooter/>
    </>

  );
};

export default TermsOfUsePage;
