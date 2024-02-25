// const sendGridMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;

// sendGridMail.setApiKey(SENDGRID_API_KEY);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "vitaliy.bliskun@gmail.com" };
//   await sendGridMail.send(email);
//   return true;
// };

// module.exports = sendEmail;


const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
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

