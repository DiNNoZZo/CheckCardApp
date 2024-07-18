import { ITranslatedMessage } from '../constants/index.constants';

class ApiError {
  code: number;
  message: ITranslatedMessage;

  constructor(code: number, message: ITranslatedMessage) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg: ITranslatedMessage) {
    return new ApiError(400, msg);
  }

  static unathorized(msg: ITranslatedMessage) {
    return new ApiError(401, msg);
  }

  static forbidden(msg: ITranslatedMessage) {
    return new ApiError(403, msg);
  }

  static internal(msg: ITranslatedMessage) {
    return new ApiError(500, msg);
  }
}

export default ApiError;