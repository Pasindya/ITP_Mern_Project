const express = require("express");
const paymentRouter = express.Router();
// Insert model
const Payment = require("../Model/PaymentModel");
// Insert payment controller
const PaymentControl = require("../Conrollers/PaymentControl");

paymentRouter.get("/",PaymentControl.getAllPayment);
paymentRouter.post("/",PaymentControl.addPayment);
paymentRouter.get("/:id",PaymentControl.getById);


//export
module.exports = paymentRouter;
