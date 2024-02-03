const { User } = require("../../models");
const { HttpError } = require("../../utils");

const subscriptionUser = async (request, response) => {
  const { email, subscription } = request.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const result = await User.findByIdAndUpdate(
    user._id,
    { subscription },
    {
      new: true,
    }
  );

  response.json({
    user: {
      email: user.email,
      subscription: result.subscription,
    },
  });
};

module.exports = subscriptionUser;
