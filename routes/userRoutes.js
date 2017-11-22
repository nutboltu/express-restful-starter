import express from 'express';

import userController from 'controllers/userController';
import validationChecker from 'utilities/validators/validationChecker';
import validationError from 'utilities/validators/validationError';
import { isAuthenticated } from 'utilities/authentication';
import { ensureLoggedIn } from 'connect-ensure-login';

const validateUserParameter = (req, res, next) => {
  validationChecker.areRequired(req, ['firstName', 'lastName', 'email', 'password']);
  validationError.processErrors(req, res, next);
};

const router = express.Router();

router.post('/', [ validateUserParameter, userController.add])
  .put('/:id', [ validateUserParameter, userController.update])
  .get('/:offset/:limit', [ userController.findAll])
  .get('/:id', [isAuthenticated, userController.findById])
  .delete('/:id', [ userController.remove]);

export default router;

