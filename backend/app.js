const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes with unique variable names
const bookingRouter = require("./Route/BookingRoute");
const staffRouter = require("./Route/StaffRoute");
const paymentRouter = require("./Route/PaymentRoute");




const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Apply the routers to their respective paths
app.use("/bookings", bookingRouter);
app.use("/staff", staffRouter);


// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://surfdeck:surfdeck1234@cluster0.kcpia.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5001, () => {
            console.log("Server is running on port 5001");
          });
          
    })
    .catch((err) => console.log(err));
