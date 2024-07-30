import { NextFunction, Request, Response } from 'express';

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // [CR] tady bych čekal nějakou kontrolu, zda je uživatel přihlášený
  res.status(200).json({ message: 'User is logged in' });
};
