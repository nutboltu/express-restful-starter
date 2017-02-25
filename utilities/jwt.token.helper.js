import { encode, decode } from 'jwt-simple';
import config from '../config';

const algorithm = 'HS512';

const encodeToken = (payload) => {
  return encode(payload, config.jwtSecret, algorithm);
};

const decodeToken = (payload) => {
  return decode(payload, config.jwtSecret, false, algorithm)
};

export default {
  encodeToken,
  decodeToken,
};
