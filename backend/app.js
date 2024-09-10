const express = require("express");
const mongoose = require("mongoose");
const bookingRouter = require("./Route/BookingRoute");
const planeventRouter = require("./Route/PlaneventRoutes");

const app = express();

//middleware
app.use(express.json());
app.use("/bookings", bookingRouter);
app.use("/planevents", planeventRouter);



mongoose.connect("mongodb+srv://surfdeck:surfdeck1234@cluster0.kcpia.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5003, () => {
            console.log("Server is running on port 5003");

        });
    })
    .catch((err) => console.log((err)));