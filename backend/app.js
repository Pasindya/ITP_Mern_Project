const express = require("express");
const mongoose = require("mongoose");

// Import routes with unique variable names
const bookingRouter = require("./Route/BookingRoute");
const staffRouter = require("./Route/StaffRoute");

const app = express();

// Middleware
app.use(express.json());

// Apply the routers to their respective paths
app.use("/bookings", bookingRouter);
app.use("/staff", staffRouter);

mongoose.connect("mongodb+srv://surfdeck:surfdeck1234@cluster0.kcpia.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log(err));
