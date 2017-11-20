import express from 'express';

import authenticationController from 'controllers/authentication.controller';
import validationChecker from 'middleware/validators/validation.checker';
import validationError from 'middleware/validators/validation.error';

const validateAuthenticateParameter = (req, res, next) => {
  validationChecker.areRequired(req, ['payload']);
  validationError.processErrors(req, res, next);
};

/* eslint-disable */
const router = express.Router();
/* eslint-enable */

router.post('/', [validateAuthenticateParameter, authenticationController.authenticate]);

export default router;

