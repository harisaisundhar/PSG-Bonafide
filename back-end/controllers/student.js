const Task = require("../models/student");

exports.getPending = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      const data = await Task.aggregate([
        { $match: { "bonafides.status": "tutorApproved" } },
      ]);
      data.map((student) => {
        student.bonafides = student.bonafides.filter(
          (bonafide) => bonafide.status === "tutorApproved"
        );
      });

      res.status(200).json({ success: true, data: data });
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

exports.getClassList = async (req, res) => {
  try {
    if (
      req.user.role === "faculty" &&
      req.user.tutorClass === req.params.classId
    ) {
      const data = await Task.find({ classId: req.user.tutorClass })
        .lean()
        .exec();
      res.status(200).json({ success: true, data: data });
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

exports.apply = async (req, res) => {
  try {
    if (req.user.role === "student") {
      const response_data = {
        title: req.body.title,
        description: req.body.description,
        supportingDocumentsLink: req.body.supportingDocumentsLink,
        documentLink: "",
        status: "Applied",
        comments: "",
      };
      await Task.findOneAndUpdate(
        {
          rollNo: req.user.rollNo,
        },
        { $push: { bonafides: response_data } }
      );
      res.status(200).json({ success: true });
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

exports.getBonafide = async (req, res) => {
  try {
    if (req.user.role === "student" && req.user.rollNo === req.params.rollNo) {
      const doc = await Task.findOne({ rollNo: req.user.rollNo }).lean().exec();

      if (!doc) {
        return res.status(400).end();
      }
      res.status(200).json({ success: true, data: doc.bonafides });
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(400).json({ success: false, message: "Error with get func" });
  }
};
