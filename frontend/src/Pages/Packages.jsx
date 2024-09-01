import React from 'react';

export default function PackagesSummary() {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Discover Our Surfing Packages
      </h1>

      {/* Beginner Package */}
      <div className="relative bg-white shadow-xl rounded-lg p-6 mb-8 border-t-4 border-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Beginner Package</h2>
            <p className="text-gray-700 text-base mb-4">
              Perfect for those new to surfing. Enjoy 5 beginner-friendly lessons, equipment rental, and access to gentle surf spots. Start your journey with our friendly instructors.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-500">$300</span>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out hover:bg-blue-600">
                Book Now
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img 
              src="public/images/p5.jpeg" 
              alt="Beginner Surfing" 
              className="rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 w-64 h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Intermediate Package */}
      <div className="relative bg-white shadow-xl rounded-lg p-6 mb-8 border-t-4 border-purple-400 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Intermediate Package</h2>
            <p className="text-gray-700 text-base mb-4">
              Ideal for those ready to advance their skills. Includes 5 lessons focusing on techniques and wave reading. Enhance your surfing with personalized coaching.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-purple-500">$450</span>
              <button className="bg-purple-500 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out hover:bg-purple-600">
                Book Now
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img 
              src="public/images/inter.jpg" 
              alt="Intermediate Surfing" 
              className="rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 w-64 h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Advanced Package */}
      <div className="relative bg-white shadow-xl rounded-lg p-6 mb-8 border-t-4 border-pink-400 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold text-pink-600 mb-4">Advanced Package</h2>
            <p className="text-gray-700 text-base mb-4">
              For seasoned surfers seeking new challenges. Includes 5 advanced lessons, maneuver training, and video analysis. Perfect your skills with expert guidance.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pink-500">$600</span>
              <button className="bg-pink-500 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out hover:bg-pink-600">
                Book Now
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img 
              src="public/images/advan.jpg" 
              alt="Advanced Surfing" 
              className="rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 w-64 h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
