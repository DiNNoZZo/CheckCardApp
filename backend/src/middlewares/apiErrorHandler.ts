// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import multer from 'multer'; // [CR] tohle je tu navíc
import ApiError from './ApiError';
import { badRequestMessageList } from '../constants/index.constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const apiErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) return res.status(err.code).json(err.message);
  if (err instanceof multer.MulterError) {
   return res.status(500).json(err);
  }
  
  res.status(500).json(badRequestMessageList.internalAppErr);
};
