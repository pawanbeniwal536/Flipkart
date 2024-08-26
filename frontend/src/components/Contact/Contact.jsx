import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';

const Contact = () => {

    const handleSubmit = () => {
        alert("Thank you for contacting us! Your message has been successfully submitted.");
    }

  return (
    <>
    <Navbar2/>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Contact Us</h2>

        <div className="flex flex-col lg:flex-row">
          {/* Contact Form */}
          <div className="lg:w-1/2 lg:pr-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onSubmit={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2 lg:pl-8 mt-10 lg:mt-0">
            <h3 className="text-xl font-semibold text-gray-800">Our Contact Information</h3>
            <p className="mt-4 text-gray-600">We'd love to hear from you! Reach out to us through any of the following methods:</p>

            <div className="mt-6">
              <p className="flex items-center text-gray-700">
                <span className="font-semibold mr-2">Email:</span> pawanbeniwal012@gmail.com
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="font-semibold mr-2">Phone:</span> +91 7900956259
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="font-semibold mr-2">Address:</span> Mathura (281403) , UttarPradesh , India
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
              <div className="flex mt-4 space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100069534045314" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-facebook fa-lg">Facebook</i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <i className="fab fa-twitter fa-lg">Twitter</i>
                </a>
                <a href="https://www.instagram.com/pawanbeniwal536/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                  <i className="fab fa-instagram fa-lg">Instagram</i>
                </a>
                <a href="https://www.linkedin.com/in/pawan-beniwal-a38327305" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-linkedin fa-lg">LinkedIn</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
