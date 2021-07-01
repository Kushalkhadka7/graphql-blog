import Joi from 'joi';
import { LoginArgs } from '../domain/request/Auth';

/**
 * Login schema.
 */
const LOGIN_SCHEMA: Joi.ObjectSchema<LoginArgs> = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(0).max(30).required()
});

export default LOGIN_SCHEMA;
