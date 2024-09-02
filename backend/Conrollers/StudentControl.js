const Student = require("../Model/StudentModel");

const getAllStudent = async (req, res, next) => {
    let student;
    try {
        student = await Student.find();
    } catch (err) {
        console.log(err);
    }
    if (!student) {
        return res.status(404).json({ message: "Students not found" });
    }
    return res.status(200).json({ student });
};

// Data Insert
const addStudent = async (req, res, next) => {
    const { name, email,  address, phoneNumber, password } = req.body;

    let student;

    try {
        student = new Student({ name, email,  address, phoneNumber, password});
        await student.save();
    } catch (err) {
        console.log(err);
    }

    // If unable to insert student
    if (!student) {
        return res.status(404).json({ message: "Unable to add student" });
    }
    return res.status(200).json({ student });
};

exports.getAllStudent = getAllStudent;
exports.addStudent= addStudent;