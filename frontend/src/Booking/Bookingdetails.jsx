// Bookingdetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bookingnav from './Bookingnav';
import Booking from './Booking';

const URL = "http://localhost:5003/bookings";

const fetchHandler = async () => {
    try {
        const response = await axios.get(URL);
        console.log(response.data); // Log the response data to debug
        return response.data;
    } catch (error) {
        console.error("Error fetching bookings:", error); // Log errors if any
        return { bookings: [] }; // Return an empty array in case of an error
    }
}

export default function Bookingdetails() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchHandler().then((data) => {
            if (data && data.bookings) {
                setBookings(data.bookings);
            } else {
                console.warn("No bookings found or data format incorrect.");
            }
        });
    }, []);

    return (
        <div className="flex">
            <Bookingnav /> {/* Include the navigation bar */}
            <main className="flex-1 ml-64 p-8 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Booking Details</h1>

                <div>
                    {bookings && bookings.length > 0 ? (
                        bookings.map((booking, i) => (
                            <Booking key={i} booking={booking} />
                        ))
                    ) : (
                        <p>No bookings available.</p> // Display a message if no bookings are found
                    )}
                </div>
            </main>
        </div>
    );
}
