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

//data Insert 
const addStaff = async (req,res,next) => {
    const {name,gmail,age,address,experience,password} = req.body;

    let staff;
   
    try {
        staff = new Staff({name,gmail,age,address,experience,password});
        await staff.save();
    }catch (err) {
        console.log(err);
    }
    
    // not insert staff member
    if (!staff){
        return res.status(404).json({message:"unable to add staff member"});

    }
    return res.status(200).json({ staff });

}

exports.getAllStaff = getAllStaff;
exports.addStaff = addStaff;
