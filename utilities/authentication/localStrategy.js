
import { Strategy } from 'passport-local';
import UserModelHandler from 'models/Users/UserModelHandler';
import errorHandler from 'utilities/handlers/errorHandler';

const localStrategy = new Strategy(
  function(username, password, done) {
    UserModelHandler.findByUsername(username, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(errorHandler.INVALID_USERNAME, null);
      }
      if (!user.validPassword(password)) {
        return done(errorHandler.INVALID_PASSWORD, null);
      }
      return done(null, user.toObject());
    });
  }
);

export default localStrategy;
