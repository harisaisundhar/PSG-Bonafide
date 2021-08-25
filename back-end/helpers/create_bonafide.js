const bonafide = require("./templates/bonafide");
const htmlPdf = require("html-pdf");

exports.createBonafide = (req) => {
	var bonafideName = req.body.rollNo + req.body.bonafideId;
	return new Promise((resolve, reject) => {
		htmlPdf
			.create(bonafide.pdfTemplate(req.body), {})
			.toFile(`bonafide-certi/${bonafideName}.pdf`, (err) => {
				if (err) {
					console.error(err);
					reject({ success: false, message: "pdf creation error", err });
				}
				resolve({
					success: true,
				});
			});
	});
};
