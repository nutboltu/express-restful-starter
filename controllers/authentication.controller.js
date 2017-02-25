import responseHelper  from '../utilities/response.helper';
import jwtTokenHelper from '../utilities/jwt.token.helper';
import errorHandler from '../utilities/error.handler';

const authenticate = (req, res) => {
  try {
    const token = jwtTokenHelper.encodeToken(req.body.payload);
    const data = Object.assign({}, {token: token});
    responseHelper.res(null, data, res);
  } catch (err) {
    responseHelper.res(errorHandler.INVALID_PARAMETER, null, res);
  }
};

export default {
  authenticate,
};
