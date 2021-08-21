const Task = require("../models/student");
const mongoose = require("mongoose");

exports.approve = async (req, res) => {
    try
    {
        if (req.user.role === "faculty")
        {
            var id = mongoose.Types.ObjectId(req.body.bonafideId)
            await Task
                .findOneAndUpdate(
                    { rollNo: req.body.rollNo, bonafides: { $elemMatch: { _id: id } } },
                    { $set: { 'bonafides.$.status': "tutorApproved" } },
                    (err, updated) => {
                        if (err)
                        {
                            console.error(err)
                            res.status(400).json({ message: "updation error", err });
                        }
                        res.status(200).json({ message: "success", updated });
                    }
                )
        } else {
                res.status(401).json({
                success: false
            });
        }
    }catch (e) {
        console.error(e)
        res.status(400).end()
    }
}
