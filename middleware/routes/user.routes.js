import express from 'express';

import userController from 'controllers/user.controller';
import validationChecker from 'middleware/validators/validation.checker';
import validationError from 'middleware/validators/validation.error';

const validateUserParameter = (req, res, next) => {
  validationChecker.areRequired(req, ['firstName', 'lastName', 'email', 'password']);
  validationError.processErrors(req, res, next);
};

const validateToken = (req, res, next) => {
  validationChecker.hasValidToken(req);
  validationError.processErrors(req, res, next);
};

/* eslint-disable */
const router = express.Router();
/* eslint-enable */

router.post('/', [validateToken, validateUserParameter, userController.add])
  .put('/:id', [validateToken, validateUserParameter, userController.update])
  .get('/:offset/:limit', [validateToken, userController.findAll])
  .get('/:id', [validateToken, userController.findById])
  .delete('/:id', [validateToken, userController.remove]);

export default router;

