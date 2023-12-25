import { z } from 'zod'; 

const userValidationSchema=z.object({
    password:z.string({
        invalid_type_error:"password must be string"
    }).max(20,{
        message:'password must be less then 20 characters long'
    }).optional()
}) 

export const userValidation={
    userValidationSchema
}