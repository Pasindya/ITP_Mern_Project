const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/BookingRoute");

const app = express();

app.use("/",(req, res, next) => {
    res.send("It is working");
})
mongoose.connect("mongodb+srv://surfdeck:surfdeck1234@cluster0.kcpia.mongodb.net/")


/*//middleware
app.use(express.json());
app.use("/bookings",router);



mongoose.connect("mongodb+srv://surfdeck:surfdeck1234@cluster0.kcpia.mongodb.net/")
.then(() =>console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));*/