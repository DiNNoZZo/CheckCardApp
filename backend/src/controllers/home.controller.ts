import { NextFunction, Request, Response } from 'express';

export const getBaseMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: 'Application is working.' });
};
