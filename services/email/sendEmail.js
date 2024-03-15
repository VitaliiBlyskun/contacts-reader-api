const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "vitaliy.bliskun@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const emailOptions = {
    from: "vitaliy.bliskun@meta.ua",
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.html,
  };

  try {
    await transporter.sendMail(emailOptions);
    console.log("Email send success");
    return true;
  } catch (error) {
    console.error("Error sending email:", error.message);
    return false;
  }
};

module.exports = sendEmail;
