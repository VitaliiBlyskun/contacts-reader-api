const Joi = require("joi");

const regularNamePattern = /^[A-Za-z]{2,20}$/;
const regularEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const registrationUserSchema = Joi.object({
  name: Joi.string().pattern(regularNamePattern).required(),
  email: Joi.string().pattern(regularEmailPattern).required(),
  password: Joi.string().min(6).required(),
});

module.exports = registrationUserSchema;
