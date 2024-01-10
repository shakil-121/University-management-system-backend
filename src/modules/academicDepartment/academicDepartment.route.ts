import express from 'express'; 
import ValidateRequest from '../../app/middlware/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router =express.Router(); 

router.post('/create-academic-department',ValidateRequest(academicDepartmentValidation.createAcademicDepartmentValidationSchema),AcademicDepartmentController.createAcademicDepartment) 

router.get('/',AcademicDepartmentController.getAllAcademicDepartment); 

router.get('/:departmentId',AcademicDepartmentController.getSingleAcademicDepartment); 

router.patch('/:departmentId',ValidateRequest(academicDepartmentValidation.updateAcademicDepartmentValidationSchema),AcademicDepartmentController.updateAcademicDepartment)

export const AcademicDepartmentRoutes=router;