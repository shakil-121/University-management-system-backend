import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

//this will call controller
router.post('/create-student', studentControllers.createStudent);

router.get('/', studentControllers.getAllStudentData);

router.get('/:studentID', studentControllers.getSingleStudentData);

export const studentRouters = router;
