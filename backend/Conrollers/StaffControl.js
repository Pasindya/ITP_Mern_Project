const Staff = require("../Model/StaffModel");

const getAllStaff = async (req, res, next) => {  // Changed the second 'req' to 'res'
    let staff;
    try {
        staff = await Staff.find();
    } catch (err) {
        console.log(err);
    }
    if (!staff) {
        return res.status(404).json({ message: "Users not found" });
    }
    return res.status(200).json({ staff });
};

exports.getAllStaff = getAllStaff;
