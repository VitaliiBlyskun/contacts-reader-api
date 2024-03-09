const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 365,
    secure: true,
    auth: {
        user: "vitaliy.bliskun@meta.ua",
        pass: META_PASSWORD
    }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const emailOptions = {
    from: "vitaliy.bliskun@meta.ua",
    to: data.to,
    subject: data.subject,
    html: data.html,
  };

  try {
    await transport.sendMail(emailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = sendEmail;

