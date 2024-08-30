const express =  require("express");
const router = express.Router();
//Insert model
const Staff = require("../Model/StaffModel");
//Insert User Controller
const StaffControl = require("../Conrollers/StaffControl");

router.get("/",StaffControl.getAllStaff);
router.post("/",StaffControl.addStaff);


//export
module.exports = router;
