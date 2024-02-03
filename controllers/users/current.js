const current = async (request, response) => {
  const { email, password } = request.user;
  response.json({
    email,
    password,
  });
};

module.exports = current;
