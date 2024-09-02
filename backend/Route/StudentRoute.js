const express =  require("express");
const router = express.Router();
//Insert model
const Student = require("../Model/StudentModel");
//Insert User Controller
const StudentControl = require("../Conrollers/StudentControl");

router.get("/",StudentControl.getAllStudent);
router.post("/",StudentControl.addStudent);


//export
module.exports = router;
