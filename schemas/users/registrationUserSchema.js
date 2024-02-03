const Joi = require("joi");

const regularEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const registrationUserSchema = Joi.object({
  email: Joi.string().pattern(regularEmailPattern).required(),
  password: Joi.string().min(6).required(),
});

module.exports = registrationUserSchema;
