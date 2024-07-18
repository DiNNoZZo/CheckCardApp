import { JSONSchemaType } from 'ajv';
import ajvInsatnce from '../validations/ajv-instance';

interface IConfigSchema {
  NODE_ENV: 'development';
  API_HOST_DOMAIN: string;
  API_PORT: number;
  FE_HOST_DOMAIN: string;
  FE_PORT: number;
  APPLIKATION_NAME: string;
}

const schema: JSONSchemaType<IConfigSchema> = {
  type: 'object',
  additionalProperties: false,
  properties: {
    NODE_ENV: { type: 'string', default: 'development' },
    API_HOST_DOMAIN: {type: 'string', default: 'localhost'},
    API_PORT: { type: 'integer', default: 3001 },
    FE_HOST_DOMAIN: {type: 'string', default: 'localhost'},
    FE_PORT: { type: 'integer', default: 3000 },
    APPLIKATION_NAME: { type: 'string', default: 'Chcek your card' },
  },
  required: [],
};

const envVars = { ...process.env };
const valid = ajvInsatnce.validate(schema, envVars);

if (!valid)
  throw new Error(
    `Config validation errors: ${JSON.stringify(ajvInsatnce.errors)}`
  );

export default {
  env: envVars.NODE_ENV,
  apiPort: envVars.API_PORT,
  apiHostDomain: envVars.API_HOST_DOMAIN,
  feHostDomain: envVars.FE_HOST_DOMAIN,
  fePort: envVars.FE_PORT,
  applicationName: envVars.APPLIKATION_NAME,
};
