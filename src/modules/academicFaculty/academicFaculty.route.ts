import express from 'express'; 
import ValidateRequest from '../../app/middlware/validateRequest';
import { academicFacaultyValidation } from './academicFacaulty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';

const router=express.Router();  

router.post('/create-academic-faculty',ValidateRequest(academicFacaultyValidation.CreateAcademicFacultyValidationSchema),AcademicFacultyController.createAcademicFaculty); 

router.get('/:facultyId',AcademicFacultyController.getSingleAcademicFaculty); 

router.get('/',AcademicFacultyController.getAllAcademicFaculty) 

router.patch('/:facultyId',ValidateRequest(academicFacaultyValidation.updateAcademicFacultyValidationSchema),AcademicFacultyController.UpdateAcademicFaculty)

export const AcademicFacultyRoute=router;