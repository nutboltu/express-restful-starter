import expressValidator from 'express-validator';
import jwtTokenHelper from 'utilities/jwt.token.helper';

const hasValidToken = (token) => {
  if (token) {
    try {
      const decodedToken = jwtTokenHelper.decodeToken(token);
      return !!decodedToken;
    }
    catch (err) {
      return false;
    }
  }
  return false;
};

export default expressValidator({
  customValidators: {
    hasValidToken,
  }
});
