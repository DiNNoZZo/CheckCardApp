import { NextFunction, Request, Response } from 'express';

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: 'User is logged in' });
};
