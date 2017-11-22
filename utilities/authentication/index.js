import passport from 'passport';
import { Strategy } from 'passport-local';
import responseHandler from 'utilities/handlers/responseHandler';
import errorHandler from 'utilities/handlers/errorHandler';
import UserModelHandler from 'models/Users/UserModelHandler';
import localStrategy from './localStrategy';

export default class Authentication {
  constructor() {
    if (!global.authenticator) {
      global.authenticator = passport;
      global.authenticator.use(localStrategy);

      global.authenticator.serializeUser(function(user, cb) {
        cb(null, user.id);
      });

      global.authenticator.deserializeUser(function(id, cb) {
        UserModelHandler.findById(id, function (err, user) {
          if (err) { return cb(err); }
          cb(null, user.toObject());
        });
      });
    }
    return global.authenticator;
  }
};

export function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) return next();
  return responseHandler.res(errorHandler.PERMISSION_DENIED, null, res);
}


