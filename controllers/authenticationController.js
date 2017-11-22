import responseHandler  from 'utilities/handlers/responseHandler';
import Authenticator from 'utilities/authentication';

const login = (req, res, next) => {
  const authenticator = new Authenticator();
  authenticator.authenticate('local', function(err, user, info) {
    if (err) {
      responseHandler.res(err, null, res);
    }
    req.logIn(user, function(err) {
      if (err) {
        responseHandler.res(err, null, res);
      }
      return responseHandler.res(err, user, res);
    });
  })(req, res, next);
};

export default {
  login,
};
