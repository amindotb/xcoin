import { ValidationError } from 'express-validation';
import { NextFunction, Request, Response } from 'express';

export default function (
  error: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): Response {
  if (error instanceof ValidationError) {
    return res.onBadRequest(error.details, error.message)
  }

  if(error instanceof SyntaxError) {
    return res.onBadRequest(null, 'Send your request in JSON format')
  }

  return res.onNotFound(null, 'Path Not Found')
}