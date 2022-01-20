
import { Request, Response, NextFunction, response } from 'express';
import { FETCH_LIMIT, FETCH_SORT, FETCH_ORDER} from '../utils/config'

export default function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  req.query.limit = req.query.limit ?? FETCH_LIMIT;
  req.query.page = req.query.page ?? '1';
  req.query.sort = req.query.sort ?? FETCH_SORT;
  req.query.order = req.query.order ?? FETCH_ORDER;

  response.onSuccess = function(data = null, message = null) {
    return this.status(200).json({ 
      success: true,
      message,
      data,
     });
  };
  
  response.onBadRequest = function(data = null, message = 'Bad Request') {
    return this.status(400).json({ 
      success: false,
      message,
      data,
     });
  };
  
  response.onNotFound = function(data = null, message = 'Not Found') {
    return this.status(404).json({ 
      success: false,
      message,
      data,
     });
  };
  
  response.onServerError = function(data = null, message = 'Server Error') {
    return this.status(500).json({ 
      success: false,
      message,
      data,
     });
  };

  next();
}