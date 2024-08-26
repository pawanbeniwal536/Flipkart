import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';

const AboutUs = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">About Us</h2>

        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800">
            Welcome to Flipkart Clone - Your One-Stop Shopping Destination!
          </h3>
          <p className="mt-4 text-gray-600">
            At Flipkart Clone, we are passionate about bringing you the best online shopping experience. Our platform is designed to offer a wide variety of products, easy navigation, and an enjoyable shopping experience for customers of all ages.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To become the leading e-commerce platform by offering an unparalleled selection of products, excellent customer service, and a seamless shopping experience. We aim to bring the world closer through our innovative and customer-centric approach.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To empower our customers with choice, convenience, and affordability. We strive to continuously improve our platform to meet the ever-evolving needs of our users, while maintaining a strong commitment to quality and service.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-12">
          <h3 className="text-2xl font-semibold text-center text-blue-600">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-800">Customer First</h4>
              <p className="mt-2 text-gray-600">
                We prioritize our customers in every decision we make, ensuring their satisfaction and loyalty.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-800">Innovation</h4>
              <p className="mt-2 text-gray-600">
                We embrace creativity and technological advancements to stay ahead of the curve.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-800">Integrity</h4>
              <p className="mt-2 text-gray-600">
                We conduct our business with honesty, transparency, and a strong moral compass.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-800">Quality</h4>
              <p className="mt-2 text-gray-600">
                We are committed to providing products and services that meet the highest standards.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-8">What Our Customers Say</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "Flipkart Clone offers an amazing selection of products at unbeatable prices. I love the fast shipping and excellent customer service!"
              </p>
              <div className="flex items-center mt-4">
                <img src="https://via.placeholder.com/50" alt="Customer" className="w-10 h-10 rounded-full mr-4"/>
                <div>
                  <p className="font-medium text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "I've been shopping here for years, and I'm always impressed with the quality and variety. Flipkart Clone is my go-to for online shopping."
              </p>
              <div className="flex items-center mt-4">
                <img src="https://via.placeholder.com/50" alt="Customer" className="w-10 h-10 rounded-full mr-4"/>
                <div>
                  <p className="font-medium text-gray-800">Jane Smith</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "Excellent service, fantastic product range, and a user-friendly platform. Flipkart Clone has never let me down."
              </p>
              <div className="flex items-center mt-4">
                <img src="https://via.placeholder.com/50" alt="Customer" className="w-10 h-10 rounded-full mr-4"/>
                <div>
                  <p className="font-medium text-gray-800">Alex Johnson</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-center text-blue-600">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Alice Brown</h4>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">David Clark</h4>
              <p className="text-sm text-gray-500">CTO</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Emily Davis</h4>
              <p className="text-sm text-gray-500">Marketing Head</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h4 className="text-lg font-medium text-gray-800">Michael Lee</h4>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
