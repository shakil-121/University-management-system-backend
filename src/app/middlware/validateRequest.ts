import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

//  validation middleware 
const ValidateRequest=(Schema:AnyZodObject)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log('testing now....');
       //   const ZodDataValidation = studentvalidationSchema.parse(studentData);
           Schema.parseAsync({
            body:req.body
           }) 
           next()

        }catch(err){
            next(err);
        }
    }
} 

export default ValidateRequest;