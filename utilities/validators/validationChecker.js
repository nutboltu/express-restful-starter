import  config from 'config';
import { ERROR_STATUS } from 'utilities/constants';

const areRequired = (req, params) => {
  params.forEach((param) => {
    req.assert(param, `${param} is required`).notEmpty();
  });
};

const isValidEmail = (req) => {
  req.assert('email', ERROR_STATUS.INVALID_EMAIL).isEmail();
};

const isValidPassword = (req) => {
  req.assert('password', ERROR_STATUS.INVALID_PASSWORD).matches(config.validPasswordRegEx);
};

const isBoolean = (req, param) => {
  if (typeof req.param(param) === 'undefined' || req.param(param) === null) {
    req.assert(param, ERROR_STATUS.INVALID_PARAMETER).isBoolean();
  }
};

const hasValidToken = (req) => {
  req.checkHeaders('authorization', ERROR_STATUS.INVALID_ACCESS_TOKEN).notEmpty();
  req.checkHeaders('authorization', ERROR_STATUS.INVALID_ACCESS_TOKEN).hasValidToken();
};


export default {
  areRequired,
  isValidEmail,
  isValidPassword,
  isBoolean,
  hasValidToken
};
