import { NextFunction, Request, Response } from 'express';
import ajvInsatnce from '../validations/ajv-instance';
import { badRequestMessageList } from '../constants/index.constants';

export const reqBodyValidation =
  (schema: object) => (req: Request, res: Response, next: NextFunction) => {
    const validate = ajvInsatnce.compile(schema);
    const valid = validate(req.body);
    if (!valid) {
      const errors = validate.errors;
      return res
        .status(400)
        .json({ ...badRequestMessageList.validationErr, errors });
    }

    next();
  };
