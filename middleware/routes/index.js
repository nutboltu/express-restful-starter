import express from 'express';

import authenticationRouter from './authentication.routes';
import userRouter from './user.routes';

/* eslint-disable */
const router = express.Router();
/* eslint-enable */

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
  /**
   * You can allow other headers Ex: Authorization
   */
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};

router.use('/authenticate', authenticationRouter);
router.use('/users', userRouter);

export default {
  allowCrossDomain,
  router,
}

