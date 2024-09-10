const Planevent = require("../Model/PlaneventModel");
//display data
const getAllPlanevents = async(req, res, next) => {

    let Planevents;

    try {
        planevents = await Planevent.find();
    } catch (err) {
        console.log(err);
    }

    //not found
    if (!planevents) {
        return res.status(404).json({ message: "Planevent not found" });
    }

    //display All Planevents
    return res.status(200).json({ planevents });
};

//data insert
const addPlanevents = async(req, res, next) => {

    const { StudentName, EventName, age, gmail, gender } = req.body;

    let planevents;

    try {
        planevents = new Planevent({ StudentName, EventName, age, gmail, gender });
        await planevents.save();
    } catch (err) {
        console.log(err);
    }

    //not insert users
    if (!planevents) {
        return res.status(404).json({ message: "unable to add planevents" });
    }

    return res.status(200).json({ planevents });
}

//get by id
const getById = async(req, res, next) => {

    const id = req.params.id;

    let planevent;

    try {
        planevent = await Planevent.findById(id);
    } catch (err) {
        console.log(err);
    }
    //not available planevents
    if (!planevent) {
        return res.status(404).json({ message: " planevents not found" });
    }

    return res.status(200).json({ planevent });
}

//updates planevents details
const updatePlanevent = async(req, res, next) => {

    const id = req.params.id;
    const { StudentName, EventName, age, gmail, gender } = req.body;

    let planevents;

    try {
        planevents = await Planevent.findByIdAndUpdate(id, { StudentName: StudentName, EventName: EventName, age: age, gmail: gmail, gender: gender });
        planevents = await planevents.save();
    } catch (err) {
        console.log(err);

    }
    if (!planevents) {
        return res.status(404).json({ message: " Unable to Update Planevent Details" });
    }

    return res.status(200).json({ planevents });

};

//Delete Planevent Details
const deletePlanevent = async(req, res, next) => {
    const id = req.params.id;

    let Planevents;

    try {
        planevents = await Planevent.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    if (!planevents) {
        return res.status(404).json({ message: " Unable to delete Planevent Details" });
    }

    return res.status(200).json({ planevents });
};

exports.getAllPlanevents = getAllPlanevents;
exports.addPlanevents = addPlanevents;
exports.getById = getById;
exports.updatePlanevent = updatePlanevent;
exports.deletePlanevent = deletePlanevent;