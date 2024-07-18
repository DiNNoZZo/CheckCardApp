import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajvInsatnce = new Ajv({
  allErrors: true,
  coerceTypes: true,
  removeAdditional: true,
  useDefaults: true,
});

addFormats(ajvInsatnce);

export default ajvInsatnce;