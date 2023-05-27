
import express from 'express'
import { testingController } from '../controllers/testControllers.js';

const router=express.Router();

 router.get('/test-post',testingController);

export default router;