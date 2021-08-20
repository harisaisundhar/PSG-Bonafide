const Task = require("../models/student");

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
    res.status(400).end()
  }
}

// export const crudControllers => ({
//   getBonafide: getBonafide(model)
// })
// module.exports =
