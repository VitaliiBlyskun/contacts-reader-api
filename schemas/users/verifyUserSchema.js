const Joi = require("joi");

const verifyUserSchema = Joi.object({
      email: Joi.string().required(),
})

module.exports = verifyUserSchema