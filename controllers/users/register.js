const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const { BASE_URL } = process.env;

const { User } = require("../../models");

const { HttpError } = require("../../utils");
const { emailService } = require("../../services");

const register = async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPasswort = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = uuidv4();

  const newUser = await User.create({
    ...request.body,
    password: hashPasswort,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    text: "and easy to do anywhere, even with Node.js",
    html: "<a target='_blank' href=`${BASE_URL}/api/users/verify/${verificationToken}`>Click on this link</a>",
  };

  await emailService.sendEmail(verifyEmail);

  response.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
