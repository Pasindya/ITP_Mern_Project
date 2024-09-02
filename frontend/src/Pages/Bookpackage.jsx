import React, { useState } from 'react';
import Headernav from '../Components/Headernav'; // Import Headernav
import Footer from '../Components/Footer'; // Import Footer

export default function BookPackage() {
  const [formData, setFormData] = useState({
    name: '',
    packageName: '',
    email: '',
    mobileNo: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    }

    // Package name validation
    if (!formData.packageName.trim()) {
      formErrors.packageName = 'Package name is required';
    }

    // Email validation
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    // Mobile number validation
    if (!formData.mobileNo.trim()) {
      formErrors.mobileNo = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNo)) {
      formErrors.mobileNo = 'Mobile number is invalid';
    }

    // Address validation
    if (!formData.address.trim()) {
      formErrors.address = 'Address is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Restrict special characters and numbers in the name field
    if (id === 'name') {
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
      setFormData({
        ...formData,
        [id]: filteredValue
      });
      return;
    }

    // Restrict letters and special characters in the mobile number field
    if (id === 'mobileNo') {
      const filteredValue = value.replace(/[^\d]/g, ''); // Allow only numbers
      setFormData({
        ...formData,
        [id]: filteredValue
      });
      return;
    }

    // Restrict numbers and special characters in the package name field
    if (id === 'packageName') {
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
      setFormData({
        ...formData,
        [id]: filteredValue
      });
      return;
    }

    // Allow all characters for email and address fields
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log('Form data submitted:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        packageName: '',
        email: '',
        mobileNo: '',
        address: ''
      });
      setErrors({});
    }
  };

  return (
    <div>
      {/* Header Component */}
      <Headernav />

      {/* Main Content */}
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Book Your Package</h2>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-blue-500'}`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Package Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="packageName">Package Name</label>
              <input
                type="text"
                id="packageName"
                value={formData.packageName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.packageName ? 'border-red-500' : 'focus:ring-blue-500'}`}
                placeholder="Enter the package name"
              />
              {errors.packageName && <p className="text-red-500 text-sm mt-1">{errors.packageName}</p>}
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-blue-500'}`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Mobile Number */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="mobileNo">Mobile Number</label>
              <input
                type="tel"
                id="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.mobileNo ? 'border-red-500' : 'focus:ring-blue-500'}`}
                placeholder="Enter your mobile number"
              />
              {errors.mobileNo && <p className="text-red-500 text-sm mt-1">{errors.mobileNo}</p>}
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Address</label>
              <textarea
                id="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.address ? 'border-red-500' : 'focus:ring-blue-500'}`}
                rows="3"
                placeholder="Enter your address"
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
