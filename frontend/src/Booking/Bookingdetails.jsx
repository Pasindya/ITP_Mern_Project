import React,{useEffect, useState} from 'react';
import axios from"axios";

const URL ="http://Localhost:5000/bookings";


const fetchHandler = async () =>{
    return await axios.get(URL).then((res) => res.data);
}
export default function Bookingdetails() {

    const[bookings, setBookings] = useState();
useEffect(()=> {
    fetchHandler().then((data) => setBookings(data.bookings));
},[])

  return (
    <div>
      <h1> Display booking details</h1>
      

     
    </div>
  )
}
