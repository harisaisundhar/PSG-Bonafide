var path = require("path");

exports.fetchMail = (req, res) => {
	var datam = req.user.rollNo + req.body.bonafideId;
	res.status(200).sendFile(`${datam}.pdf`, {
		root: path.join(__dirname, "../bonafide-certi"),
	});
};
