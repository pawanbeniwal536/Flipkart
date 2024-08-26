import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';

const FlipkartStories = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Flipkart Stories</h2>

        {/* Hero Section */}
        <div className="relative w-full h-64 bg-cover bg-center rounded-lg mb-12"
             style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white animate-fadeInDown">Inspiring Stories from Our Community</h3>
          </div>
        </div>

        {/* Stories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`https://via.placeholder.com/400x300?text=Story+${index + 1}`}
                  alt={`Story ${index + 1}`}
                  className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Story Title {index + 1}
                </h4>
                <p className="mt-2 text-gray-600">
                  This is a short description of the story. It highlights the key points and draws the reader in.
                </p>
              </div>
              <button className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow transition-transform duration-300 transform group-hover:translate-x-2">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FlipkartStories;
