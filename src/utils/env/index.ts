import 'dotenv/config';
import joi from 'joi';

export default () => {
  const schema = joi
    .object()
    .keys({
      PORT: joi.number().positive().required().default(3000),
    })
    .unknown();

  const { error } = schema
    .preferences({
      errors: { label: 'key' },
    })
    .validate(process.env);

  if (error) {
    throw new Error(`ENV validation error: ${error.message}`);
  }
};
