const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const bookingRouter = require("./Route/BookingRoute")
const paymentRouter = require("./Route/PaymentRoute");
=======

// Import routes with unique variable names
const bookingRouter = require("./Route/BookingRoute");
const staffRouter = require("./Route/StaffRoute");
>>>>>>> origin/main

const app = express();
const cors = require("cors");



// Middleweare
app.use(express.json());
<<<<<<< HEAD
app.use("/bookings",bookingRouter);
app.use("/payments",paymentRouter);




mongoose.connect("mongodb+srv://surfdeck:surfdeck1234@cluster0.kcpia.mongodb.net/")
.then(() =>console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));
=======
app.use(cors());
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
>>>>>>> origin/main
