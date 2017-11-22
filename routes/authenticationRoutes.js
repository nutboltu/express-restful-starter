import express from 'express';

import authenticationController from 'controllers/authenticationController';
import validationChecker from 'utilities/validators/validationChecker';
import validationError from 'utilities/validators/validationError';

const validateLoginParameter = (req, res, next) => {
  validationChecker.areRequired(req, ['username', 'password']);
  validationError.processErrors(req, res, next);
};

const router = express.Router();

router.post('/login', authenticationController.login);
export default router;

