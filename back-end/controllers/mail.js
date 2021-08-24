"use strict";
require("dotenv").config();

const nodemailer = require("nodemailer");

exports.sendMail = async (req, res) => {
  let testAccount = nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.Email,
      pass: process.env.Pass,
    },
  });

  let info = transporter.sendMail({
    from: process.env.Email, // sender address
    to: process.env.SendEmail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", process.env.SendEmail);
  res.status(200).json({
    success: true,
    data: "mail sent",
  });
};
