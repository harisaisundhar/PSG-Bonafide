const Task = require("../models/student");
const mongoose = require("mongoose");

exports.approve = async (req, res) => {
  try {
    if (req.user.role === "faculty") {
      var id = mongoose.Types.ObjectId(req.body.bonafideId);
      await Task.findOneAndUpdate(
        { rollNo: req.body.rollNo, bonafides: { $elemMatch: { _id: id } } },
        { $set: { "bonafides.$.status": "tutorApproved" } },
        async (err) => {
          if (err) {
            console.error(err);
            res
              .status(400)
              .json({ success: false, message: "updation error", err });
          }
          const data = await Task.find({ rollNo: req.body.rollNo })
            .lean()
            .exec();
          res.status(200).json({
            success: true,
            data: data,
          });
        }
      );
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
