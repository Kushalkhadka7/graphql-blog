import Joi, { func } from 'joi';

interface Schema<T> {
  schema: T;
}

/**
 * Validate request payload.
 *
 * @param {Joi.ObjectSchema<T>} schema
 * @param {U} args
 */
export async function validate<T, U>(schema: Joi.ObjectSchema<T>, args: U) {
  await schema.validateAsync(args);
}
