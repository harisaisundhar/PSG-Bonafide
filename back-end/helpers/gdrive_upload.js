require("dotenv").config();
const path = require("path");
const NodeGoogleDrive = require("node-google-drive");

const PATH_TO_CREDENTIALS = path.resolve(
	path.join(__dirname, `../assets/auth.json`)
);

exports.GdriveUpload = async (fileName) => {
	const creds_service_user = require(PATH_TO_CREDENTIALS);

	const googleDriveInstance = new NodeGoogleDrive({
		ROOT_FOLDER: process.env.GDRIVE_ROOT_FOLDER,
	});

	let gdrive = await googleDriveInstance.useServiceAccountAuth(
		creds_service_user
	);

	let uploadResponse = await googleDriveInstance.writeFile(
		path.join(__dirname, `../assets/bonafide-certi/${fileName}.pdf`),
		null,
		fileName,
		null,
		{
			destinationMimeType: "application/pdf",
		}
	);
	return uploadResponse.id;
};
