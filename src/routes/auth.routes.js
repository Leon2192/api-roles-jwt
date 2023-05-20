import * as authController from '../controllers/auth.controller';

import { Router } from "express";

const router = Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);

export default router;