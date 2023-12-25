import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

//this will call controller
router.post('/create-student', userController.createStudent);


export const UserRouters = router;