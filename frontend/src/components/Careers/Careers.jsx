import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';

const Careers = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Careers at Flipkart Clone</h2>

        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800">
            Join Our Team - Shape the Future of E-Commerce!
          </h3>
          <p className="mt-4 text-gray-600">
            At Flipkart Clone, we believe in innovation, creativity, and a customer-first approach. If you are passionate about technology and want to be part of a dynamic team that’s transforming the online shopping experience, you’ve come to the right place!
          </p>
        </div>

        {/* Open Positions Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-8">Open Positions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-medium text-gray-800">Software Engineer</h4>
              <p className="mt-2 text-gray-600">
                We are looking for skilled software engineers to join our development team. If you have a passion for coding and a knack for problem-solving, apply now!
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">Apply Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-medium text-gray-800">Product Manager</h4>
              <p className="mt-2 text-gray-600">
                Are you a strategic thinker with a deep understanding of customer needs? Join us as a Product Manager and help shape the future of our platform.
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">Apply Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-medium text-gray-800">UI/UX Designer</h4>
              <p className="mt-2 text-gray-600">
                We need a creative UI/UX Designer to craft exceptional user experiences. If you have an eye for detail and a passion for design, we’d love to hear from you!
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">Apply Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-medium text-gray-800">Marketing Specialist</h4>
              <p className="mt-2 text-gray-600">
                Are you a marketing guru with a passion for digital campaigns? Join our team and help us spread the word about Flipkart Clone!
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">Apply Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-medium text-gray-800">Customer Support Executive</h4>
              <p className="mt-2 text-gray-600">
                We are looking for friendly and professional Customer Support Executives to assist our customers. If you enjoy helping others, this role is for you!
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">Apply Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-medium text-gray-800">Business Analyst</h4>
              <p className="mt-2 text-gray-600">
                We need analytical minds to join our team as Business Analysts. If you have a knack for numbers and data-driven decision-making, apply today!
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Company Culture Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-12">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-8">Our Culture</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            We foster a collaborative and inclusive environment where everyone’s voice is heard. Our team is made up of diverse individuals who bring their unique perspectives to the table, helping us innovate and grow. At Flipkart Clone, we value work-life balance, professional growth, and a positive workplace culture.
          </p>
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/600x300" alt="Company Culture" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-8">Why Work With Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Growth Opportunities" className="mx-auto mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Growth Opportunities</h4>
              <p className="mt-2 text-gray-600">
                We provide our employees with ample opportunities for career growth and professional development.
              </p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Inclusive Environment" className="mx-auto mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Inclusive Environment</h4>
              <p className="mt-2 text-gray-600">
                Our diverse and inclusive workplace is a place where everyone is valued and respected.
              </p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Work-Life Balance" className="mx-auto mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Work-Life Balance</h4>
              <p className="mt-2 text-gray-600">
                We believe in maintaining a healthy work-life balance to keep our employees happy and productive.
              </p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Competitive Salary" className="mx-auto mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Competitive Salary</h4>
              <p className="mt-2 text-gray-600">
                We offer competitive salaries and benefits to attract and retain the best talent.
              </p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Health & Wellness" className="mx-auto mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Health & Wellness</h4>
              <p className="mt-2 text-gray-600">
                We provide comprehensive health benefits to ensure the well-being of our employees.
              </p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Team Activities" className="mx-auto mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Team Activities</h4>
              <p className="mt-2 text-gray-600">
                We host regular team-building activities to foster camaraderie and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Careers;
