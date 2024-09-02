const PaymentModel = require("../Model/PaymentModel");
const Payment = require("../Model/PaymentModel");

// Data display
const getAllPayment = async (req,res,next) =>{

    try {
        console.log('PaymentModel:', PaymentModel); // Check if PaymentModel is defined
        if (!PaymentModel) {
            return res.status(500).send('PaymentModel is not defined');
        }
        const payments = await PaymentModel.find();
        res.json(payments);
    } catch (error) {
        res.status(500).send(error.message);
    }

};

// Data insert
const addPayment = async (req,res,next) => {

    const {Fullname, email, Address, cardType, cardNumber, expirationMonth, expirationYear, cvv} = req.body;

    try {
       const newPayments = new Payment({Fullname, email, Address, cardType, cardNumber, expirationMonth, expirationYear, cvv});
        await newPayments.save();
        return res.status(201).json({newPayments})
    }catch (error){
        console,error("Error saving payment:", error);
        return res.status(500).json({message: "Server error"});
    }
};

// Get by ID
const getById = async (req,res,next) =>{
    const  {id } = req.params;
    try {
        const paymentDoc = await Payment.findById(id);
        if (!paymentDoc) {
             return res.status(404).json({message: "Payment not found"});
        }
        return res.status(200).json({payment: paymentDoc});

    } catch (error) {
        console.error("Error fetchin payment:", error);
        return res.status(500).json({message: "Server error"});
    }
};

// Update payment details
const updatePayment = async (req,res,next) => {
    const {id} = req.params;
    const {Fullname, email, Address, cardType, cardNumber, expirationMonth, expirationYear, cvv} = req.body;
    
    let updatedPayment;
    
    try {
        updatedPayment = await Payment.findByIdAndUpdate(id, {Fullname, email, Address, cardType, cardNumber, expirationMonth, expirationYear, cvv}, {new: true}); // return the updated documnet

        if (!updatedPayment) {
            return res.status(404).json({message: "Unable to update payment details"});
        }
        return res.status(200).json({payment: updatedPayment});
        
    } catch (error) {
        console.error("Error updating payment:", error);
        return res.status(500).json({message: "Server error"});
    }
};

// Delete Payment
const deletePayment = async (req,res,next) => {
    const {id} = req.params;

    let deletedPayment;

    try {
        deletedPayment = await Payment.findByIdAndDelete(id); // find and delete the payment by id
        if (!deletedPayment) {
            return res.status(404).json({message: "Unable to delete payment details"});
        }
        return res.status(200).json({message: "Payment deleted successfully", payment: deletedPayment});

    } catch (error) {
        console.error("Error deleting payment:", error);

        return res.status(500).json({message: "Server error"});
    }
};



exports.getAllPayment = getAllPayment;
exports.addPayment = addPayment;
exports.getById = getById;
exports.updatePayment = updatePayment;
exports.deletePayment = deletePayment;
