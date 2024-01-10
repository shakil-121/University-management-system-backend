import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import ValidateRequest from '../../app/middlware/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

//this will call controller
router.post('/create-academic-semester',ValidateRequest(academicSemesterValidation.createAcademicSemesterValidationSchema), AcademicSemesterController.createAcademicSemester);

router.get(
    '/:semesterId',
    AcademicSemesterController.getSingleAcademicSemester,
  );
  
  router.patch(
    '/:semesterId',
    ValidateRequest(
        academicSemesterValidation.updateAcademicSemesterValidationSchema,
    ),
    AcademicSemesterController.updateAcademicSemester,
  );
  
  router.get('/', AcademicSemesterController.getAllAcademicSemesters);

export const AcademicSemesterRoute = router;