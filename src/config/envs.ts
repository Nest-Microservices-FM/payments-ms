
import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars{
  PORT: number;
  STRIPE_SECRET: string;
  STRIPE_SUCCESS_URL: string;
  STRIPE_CANCEL_URL: string;
  STRIPE_ENDPOINT_SECRET: string;
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  STRIPE_SECRET: joi.string().required(),
  STRIPE_SUCCESS_URL: joi.string().required(),
  STRIPE_CANCEL_URL: joi.string().required(),
  STRIPE_ENDPOINT_SECRET: joi.string().required(),
})
.unknown(true);


const {error, value} = envsSchema.validate(process.env);

if(error){
  throw new Error(`Config validation error: ${error.message}`);
}

const EnvVars: EnvVars = value;

export const envs = {
  port: EnvVars.PORT,
  stripeSecret: EnvVars.STRIPE_SECRET,
  stripeSuccessUrl: EnvVars.STRIPE_SUCCESS_URL,
  stripeCancelUrl: EnvVars.STRIPE_CANCEL_URL,
  stripeEndpointSecret: EnvVars.STRIPE_ENDPOINT_SECRET
}