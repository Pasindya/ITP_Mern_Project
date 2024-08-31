import React from 'react';

export default function Aboutus() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://your-image-url.com/hero-image')" }}>
        <img 
          src="public/images/back2.jpg" 
          alt="Surfing at Arugambay" 
          className="absolute inset-0 object-cover w-full h-full" 
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl text-white font-bold">About Us</h1>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto py-16 px-5">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Our Journey</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          At Arugambay Surf-Deck, our story is one of passion, community, and a deep connection to the ocean. Since our inception, we've been committed to sharing the joy of surfing with everyone who walks through our doors. From humble beginnings to becoming a premier surf school in Arugambay, our journey has been driven by a love for the waves and the people who ride them.
        </p>
        
        {/* Timeline Section */}
        <div className="relative border-l-2 border-gray-200 mb-16">
          <div className="mb-8 ml-6">
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full mt-1.5 -left-3.5 border-2 border-white"></div>
            <h3 className="text-2xl font-semibold text-gray-800">Founded in 2010</h3>
            <p className="mt-2 text-gray-600">We started as a small group of surf enthusiasts teaching locals and tourists on the beautiful beaches of Arugambay.</p>
          </div>
          <div className="mb-8 ml-6">
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full mt-1.5 -left-3.5 border-2 border-white"></div>
            <h3 className="text-2xl font-semibold text-gray-800">Expanded Services in 2015</h3>
            <p className="mt-2 text-gray-600">With growing demand, we expanded our services to include advanced surf coaching, surf camps, and eco-friendly surf tours.</p>
          </div>
          <div className="ml-6">
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full mt-1.5 -left-3.5 border-2 border-white"></div>
            <h3 className="text-2xl font-semibold text-gray-800">Recognized Globally in 2020</h3>
            <p className="mt-2 text-gray-600">Our dedication to excellence earned us global recognition, making us a top destination for surf enthusiasts worldwide.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-4xl font-semibold text-gray-800 mb-10 text-center">What Our Students Say</h2>
          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">"Surfing at Arugambay Surf-Deck has been a life-changing experience. The instructors are top-notch, and the community is incredibly welcoming. I can't wait to come back!"</p>
              <p className="text-gray-600 font-semibold">- Emily R.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">"The surf camps are well-organized, and the lessons are tailored to individual needs. Highly recommend for anyone looking to improve their surfing skills!"</p>
              <p className="text-gray-600 font-semibold">- Michael T.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">"I've been surfing for years, but the advanced coaching here took my skills to the next level. The team is professional, friendly, and truly passionate about what they do."</p>
              <p className="text-gray-600 font-semibold">- Sarah W.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-500 py-16 text-center text-white">
        <h2 className="text-4xl font-semibold mb-6">Ready to Ride the Waves?</h2>
        <p className="text-lg mb-8">Join our community and start your surfing adventure today!</p>
        <a href="/signup" className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">Get Started</a>
      </div>
    </div>
  );
}
