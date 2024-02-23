import { Router } from "express";
import * as blogController from './blog.controller.js';
const router =Router();

router.get('/',blogController.getBlog);
router.post('/',blogController.addBlog);

export default router;