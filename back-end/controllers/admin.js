const Task = require("../models/student");
const mongoose = require("mongoose");

exports.approve = async (req, res) => {
    try
    {
        if (req.user.role === "admin")
        {
            var id = mongoose.Types.ObjectId(req.body.bonafideId)
            await Task
                .findOneAndUpdate(
                    { rollNo: req.body.rollNo, bonafides: { $elemMatch: { _id: id } } },
                    { $set: { 'bonafides.$.status': "adminApproved" } },
                    async (err) => {
                        if (err)
                        {
                            console.error(err)
                            res.status(400).json({ message: "updation error", err });
                        }
                        const data = await Task
                            .find({ rollNo: req.body.rollNo })
                            .lean()
                            .exec()
                        res.status(200).json({ message: "success", data : data });
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
