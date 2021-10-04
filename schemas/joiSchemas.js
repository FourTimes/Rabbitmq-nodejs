const Joi = require("joi");

const schema = {
  create_user_details: Joi.object({
    user: Joi.string().min(6).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
    mobile: Joi.number().min(10).required(),
  }),
  get_one_user_details: Joi.object({
    user: Joi.string().min(6).required(),
  }),
};

module.exports = schema;
