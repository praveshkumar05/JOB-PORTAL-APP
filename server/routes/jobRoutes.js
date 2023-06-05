import express from 'express'
import { authenticateUser } from '../middlwares/authMiddleware.js';
import { createJobController,deleteJobController,filteredJobController,getAllJobController, updateJobController } from '../controllers/jobController.js';
const router=express.Router();

router.post('/create-job',authenticateUser,createJobController );
router.get('/get-all-job',authenticateUser,getAllJobController);
router.put('/update-job/:id',authenticateUser,updateJobController);
router.delete('/delete-job/:id',authenticateUser,deleteJobController);
// stats filter 
router.get('/stats-filter',authenticateUser,filteredJobController)

export default router;
