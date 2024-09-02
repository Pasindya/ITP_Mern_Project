const express = require("express");
const mongoose = require("mongoose");
const bookingRouter = require("./Route/BookingRoute")
const paymentRouter = require("./Route/PaymentRoute");

const app = express();

//middleware
app.use(express.json());
app.use("/bookings",bookingRouter);
app.use("/payments",paymentRouter);




mongoose.connect("mongodb+srv://surfdeck:surfdeck1234@cluster0.kcpia.mongodb.net/")
.then(() =>console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));
