import express from 'express';
import { studentControllers } from './student.controller';
import ValidateRequest from '../../app/middlware/validateRequest';
import { updateCreateStudentvalidationSchema } from './student.validation';



const router = express.Router();

//this will call controller
router.get('/', studentControllers.getAllStudentData);

router.get('/:studentID', studentControllers.getSingleStudentData); 

router.patch('/:studentID',ValidateRequest(updateCreateStudentvalidationSchema),studentControllers.updateStudentData)

router.delete('/:studentID', studentControllers.DeleteStudentData);

export const studentRouters = router;
