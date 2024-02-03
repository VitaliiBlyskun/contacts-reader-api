const { HttpError } = require("../utils");

const validateBody = (schema) => {
  const functionWrapper = (request, response, next) => {
    const { error } = schema.validate(request.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return functionWrapper;
};

module.exports = validateBody;
