import { NextFunction, Request, Response } from 'express';

export const getPidLocations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resPid = await fetch(
      // [CR] url by měla být v konfiguraci
      'https://data.pid.cz/pointsOfSale/json/pointsOfSale.json',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    );

    const data = await resPid.json();

    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};
