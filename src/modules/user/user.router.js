import { Router } from "express";
import * as userController from './user.controller.js';
const router=Router();

router.get('/',userController.getUser);

export default router;