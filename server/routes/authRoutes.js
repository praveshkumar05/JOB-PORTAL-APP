import express from 'express'
import { loginController, registerController } from '../controllers/userController.js';
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 100 * 60 * 1000, // 100 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const router=express.Router();

router.post('/register',limiter,registerController);
router.post('/login',limiter,loginController)
export default router