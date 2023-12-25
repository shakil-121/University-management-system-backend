import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

//this will call controller
router.get('/', studentControllers.getAllStudentData);

router.get('/:studentID', studentControllers.getSingleStudentData);

router.delete('/:studentID', studentControllers.DeleteStudentData);

export const studentRouters = router;
