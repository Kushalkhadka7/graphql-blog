import Joi, { func } from 'joi';

interface Schema<T> {
  schema: T;
}

export async function validate<T, U>(schema: Joi.ObjectSchema<T>, args: U) {
  await schema.validateAsync(args);
}
