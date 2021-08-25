const Task = require("../models/student");
const mongoose = require("mongoose");
const userHelper = require("../helpers/create_bonafide");
let fs = require("fs");
var path = require("path");

exports.approve = async (req, res) => {
	try {
		if (req.user.role === "admin") {
			var bonafideName = req.body.rollNo + req.body.bonafideId;
			var id = mongoose.Types.ObjectId(req.body.bonafideId);
			const bonafideCreate = await userHelper.createBonafide(req);
			if (bonafideCreate.success === true) {
				await Task.findOneAndUpdate(
					{ rollNo: req.body.rollNo, bonafides: { $elemMatch: { _id: id } } },
					{
						$set: {
							"bonafides.$.status": "adminApproved",
							"bonafides.$.documentLink": `${bonafideName}`,
						},
					},
					async (err) => {
						if (err) {
							console.error(err);
							res
								.status(400)
								.json({ success: false, message: "updation error", err });
						}
						fs.unlink(
							path.join(__dirname, `../bonafide-certi/${bonafideName}.pdf`),
							(err) => {
								if (err) {
									console.log(err);
								}
							}
						);
						const data = await Task.find({ rollNo: req.body.rollNo })
							.lean()
							.exec();
						res.status(200).json({ success: true, data: data });
					}
				);
			} else {
				res.status(500).json({
					success: false,
					message: "Internal Server Error",
				});
			}
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
