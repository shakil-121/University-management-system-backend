import express from 'express';
import { userController } from './user.controller';
import { StudentvalidationSchema } from '../student/student.validation';
import ValidateRequest from '../../app/middlware/validateRequest';

const router = express.Router(); 

//this will call controller
router.post('/create-student',ValidateRequest(StudentvalidationSchema.CreateStudentvalidationSchema), userController.createStudent);


export const UserRouters = router;