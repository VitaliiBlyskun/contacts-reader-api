const { User } = require("../../models");
const { HttpError } = require("../../utils");
const sendEmail = require("./sendEmail");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (request, response) => {
  const { email } = request.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  if (user.verify) {
    throw HttpError(404, "Verification has already been passed");
  }

  const targetLink = `<a target='_blank' href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click on this link</a>`

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: targetLink,
  };

  await sendEmail(verifyEmail);

  response.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
