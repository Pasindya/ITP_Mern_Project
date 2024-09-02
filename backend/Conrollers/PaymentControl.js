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
const getPaymentById = async (req,res,next) =>{
    const id = req.params.id;
    try {
        const payment = await PaymentModel.findById(id);
        if (!payment) return res.status(404).json({message: "Payment not found"});
        res.json(payment);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getAllPayment = getAllPayment;
exports.addPayment = addPayment;
exports.getPaymentById = getPaymentById;




 