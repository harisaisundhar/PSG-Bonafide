const axios = require("axios");
const jsonwebtoken = require("jsonwebtoken");
const userHelper = require("../helpers/fetch_user");
const student = require("../models/student");
const tuts = require("../models/tutor");
require("dotenv").config();

exports.nucleus_auth = async (req, res) => {
	switch (req.body.role) {
		case "student": {
			let request_body = {
				rollNo: req.body.userID,
				password: req.body.password,
			};
			await axios
				.post("https://nucleus.amcspsgtech.in/oauth", request_body)
				.then(async (response) => {
					if (response.status === 200 && response.data.status === "Success") {
						const cookies = response.headers["set-cookie"];
						const data = {
							role: req.body.role,
							id: req.body.userID,
							cookies: cookies,
						};
						const userData = await userHelper.fetch_user(data);
						const response_data = {
							rollNo: userData.id,
							firstName: userData.firstName,
							lastName: userData.lastName,
							email: userData.email,
							classId: userData.classId,
							role: "student",
						};
						student
							.insertMany(response_data)
							.then(() => {
								console.log("Data inserted");
							})
							.catch(() => console.log("Duplicate insertion"));
						const token = jsonwebtoken.sign(
							response_data,
							process.env.JWT_SECRET
						);
						res.cookie("bonafide_token", token);
						res.status(200).json({
							success: true,
							data: response_data,
						});
					}
				})
				.catch(() => {
					res.clearCookie("bonafide_token");
					res.status(401).json({
						success: false,
					});
				});
			break;
		}
		case "faculty":
			await tuts
				.findOne({ tutorId: req.body.userID })
				.lean()
				.exec()
				.then((response_data) => {
					const token = jsonwebtoken.sign(
						response_data,
						process.env.JWT_SECRET
					);
					res.cookie("bonafide_token", token);
					res.status(200).json({
						success: true,
						data: response_data,
					});
				})
				.catch(() => console.log("Duplicate insertion"));
			break;
		default:
			res.clearCookie("bonafide_token");
			res.status(400).json({
				success: false,
			});
	}
};
