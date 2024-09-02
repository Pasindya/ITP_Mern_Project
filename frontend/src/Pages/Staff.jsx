import React from 'react';
import Headernav from '../Components/Headernav';  // Adjust the path as needed
import Footer from '../Components/Footer';        // Adjust the path as needed

export default function Staff() {
  return (
    <div className="flex flex-col min-h-screen">
      <Headernav />

      <main className="flex-grow p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Staff
        </h1>

        {/* Staff Content */}
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Staff Information</h2>
          <p className="text-gray-700 mb-6">
            This page provides information about our team members, their roles, and their contributions to the company. We value our team and their efforts in making our organization successful.
          </p>

          {/* Staff Details */}
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Team Member Name</h3>
            <p className="text-gray-700">Details about the team member's role and contributions go here.</p>
          </div>

          {/* Add more staff details as needed */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
