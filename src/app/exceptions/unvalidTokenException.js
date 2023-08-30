import BaseException from './baseException';

class InvalidTokenException extends BaseException {
  constructor(message, status = 401) {
    super(message, status);
  }
}

export default InvalidTokenException;
