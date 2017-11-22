import * as logger from 'winston';
import errorHandler from 'utilities/handlers/errorHandler';

const processErrors = (req, res, next) => {
  const validationErrors = req.validationErrors();
  if (validationErrors) {
    logger.error(validationErrors);
    const error = errorHandler[validationErrors[0].msg] || errorHandler.INVALID_PARAMETER;
    res.status(error.code).json(error.message);
  }
  else next();
};

export default {
  processErrors,
}
