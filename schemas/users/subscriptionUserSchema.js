const Joi = require("joi");


const subscriptionUserSchema = Joi.object({
    email: Joi.string().required(),
    subscription: Joi.string().valid('starter', 'pro', 'business').required(),
})

module.exports = subscriptionUserSchema