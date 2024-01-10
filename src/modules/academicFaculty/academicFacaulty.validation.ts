import {z} from 'zod'; 

const CreateAcademicFacultyValidationSchema=z.object({
    body:z.object({
        name:z.string(),
    })
}); 

const updateAcademicFacultyValidationSchema=z.object({
    body:z.object({
        name:z.string(),
    })
}); 

export const academicFacaultyValidation={
    CreateAcademicFacultyValidationSchema, 
    updateAcademicFacultyValidationSchema
}
