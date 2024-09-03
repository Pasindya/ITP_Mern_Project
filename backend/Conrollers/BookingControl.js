const Booking = require("../Model/BookingModel");

const getAllBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        if (!bookings || bookings.length === 0) {
            return res.status(404).json({ message: "No bookings found" });
        }
        return res.status(200).json({ bookings });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

const addBookings = async (req, res, next) => {
    const { name, packagename, email, mobileno, address } = req.body;

    try {
        const newBooking = new Booking({ name, packagename, email, mobileno, address });
        await newBooking.save();
        return res.status(201).json({ booking: newBooking });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Unable to add booking" });
    }
};

const getById = async (req, res, next) => {
    const id = req.params.id;

    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        return res.status(200).json({ booking });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

const updateBooking = async (req, res, next) => {
    const id = req.params.id;
    const { name, packagename, email, mobileno, address } = req.body;

    try {
        const booking = await Booking.findByIdAndUpdate(id, { name, packagename, email, mobileno, address }, { new: true });
        if (!booking) {
            return res.status(404).json({ message: "Unable to update booking details" });
        }
        return res.status(200).json({ booking });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

const deleteBooking = async (req, res, next) => {
    const id = req.params.id;

    try {
        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) {
            return res.status(404).json({ message: "Unable to delete booking details" });
        }
        return res.status(200).json({ booking });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

exports.getAllBookings = getAllBookings;
exports.addBookings = addBookings;
exports.getById = getById;
exports.updateBooking = updateBooking;
exports.deleteBooking = deleteBooking;
