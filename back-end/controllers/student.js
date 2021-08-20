const Task = require("../models/student");

exports.getPending = async (req, res) => {
    try {
        if (req.user.role === 'admin') {
            const data = await Task
                .aggregate(
                    [{ $match: { "bonafides.status": "tutorApproved" } },
                        { $skip: 0 }])
            data.map(student => {
                student.bonafides = student.bonafides.filter(bonafide => { return bonafide.status === 'tutorApproved' })
            })

            res.status(200).json({ data: data })   
        }
        else {
            res.status(401).json({
                success: false
            });
        }
    }catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

exports.getClassList = async (req, res) => {
    try {
        if (req.user.role === "faculty" && req.user.tutorClass === req.params.classId) {
            const data = await Task
                .find({ classId: req.user.tutorClass })
                .lean()
                .exec()
            res.status(200).json({ data: data })
        }
        else {
            res.status(401).json({
                success: false
            });
        }
    }catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

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
            await Task
                .findOneAndUpdate(
                    {
                        rollNo: req.user.rollNo,
                    },
                    { "$push": { bonafides: response_data }}
            )
            res.status(200).json({ message : "success" })
        }
        else {
            res.status(401).json({
                success: false
            });
        }
    }catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

exports.getBonafide = async (req, res) => {
    try {
        if (req.user.role === "student" && req.user.rollNo === req.params.rollNo) {
            const doc = await Task
              .findOne({rollNo: req.user.rollNo })
              .lean()
              .exec()

            if (!doc) {
              return res.status(400).end()
            }
            res.status(200).json({ data: doc.bonafides })
        } else {
            res.status(401).json({
                success: false
          });
      }
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Error with get func" })
  }
}
