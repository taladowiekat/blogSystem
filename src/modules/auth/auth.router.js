import { Router } from "express";
import * as authController from "./auth.controller.js";
const router = new Router();

router.get('/',authController.getAuth)
router.post('/register',authController.register)
router.post('/login',authController.login)
router.patch('/:id',authController.update)
router.delete('/:id',authController.destroy)

export default router;

