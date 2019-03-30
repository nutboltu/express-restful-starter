import express from 'express';

import authenticationController from 'controllers/authenticationController';
import validationChecker from 'utilities/validators/validationChecker';
import validationError from 'utilities/validators/validationError';

const router = express.Router();

router.post('/login', authenticationController.login);
export default router;

