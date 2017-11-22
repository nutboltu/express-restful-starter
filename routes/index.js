import express from 'express';
import authenticationRouter from './authenticationRoutes';
import userRouter from './userRoutes';

const router = express.Router();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};

router.use('/', authenticationRouter);
router.use('/users', userRouter);

export default {
  allowCrossDomain,
  router,
}

