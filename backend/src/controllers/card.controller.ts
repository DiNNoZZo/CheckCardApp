import { NextFunction, Request, Response } from 'express';

interface IValidity {
  validity_start: string;
  validity_end: string;
}

interface IState {
  state_id: number;
  state_description: string;
}

export const checkCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cardNumber = req.params.cardNumber;

  const resValidity = await fetch(
    `http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/validity`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-API-Key':
          'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2h5dHJ5IE9kcG92aWRhYyIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNTExNDUwNTk3fQ.p-MUGvUsUeQwsfRJSCdTm8eAP_MnyRrM58q6ehUjGLiDu5Bjkm7Gvbs0JTDitzPvWejkfrw-4fMXKjHKfj6gBQ',
      },
    }
  );

  const resState = await fetch(
    `http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/state`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-API-Key':
          'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2h5dHJ5IE9kcG92aWRhYyIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNTExNDUwNTk3fQ.p-MUGvUsUeQwsfRJSCdTm8eAP_MnyRrM58q6ehUjGLiDu5Bjkm7Gvbs0JTDitzPvWejkfrw-4fMXKjHKfj6gBQ',
      },
    }
  );

  const validityCard = (await resValidity.json()) as IValidity;
  const stateCard = (await resState.json()) as IState;

  res.status(200).json({
    validity: {
      validityEnd: validityCard.validity_end,
      validityStart: validityCard.validity_start,
    },
    state: {
      stateDescription: stateCard.state_description,
      stateId: stateCard.state_id,
    },
  });
};
