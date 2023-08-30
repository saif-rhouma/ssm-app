import environment from '../../config/environment';
import logger from '../../utils/logger';
import SSMToken from '../../utils/ssmToken';
import InvalidTokenException from '../exceptions/unvalidTokenException';

const authMiddleware = (req, res, next) => {
  if (environment.isDev) {
    logger.info('Skipping Middleware Validation...');
    next();
    return;
  }
  const { token } = req.headers;
  if (SSMToken.validate(token)) {
    next();
  } else {
    throw new InvalidTokenException();
  }
};
export default authMiddleware;
