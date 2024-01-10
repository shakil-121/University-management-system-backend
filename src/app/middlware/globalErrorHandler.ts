import { path } from 'path';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from '../config';
import { TErrorSource } from '../interface/error';
import { ZodError } from 'zod';


const globalErrorHandler:ErrorRequestHandler=(err,req,res,next)=>{  

  //setting default value 
    let statusCode=500; 
    let message=err.message||'Something want to wrong !';  
    let errorSources:TErrorSource=[{
       path:'', 
       message:'Validation Error'
    }] 

    if(err instanceof ZodError){
      const simplifiedError= 
    }

    // ultimate response for client-side 
    return res.status(statusCode).json({
      success:false, 
      message, 
      errorSources,
      err, 
      stack:config.NODE_ENV === 'development'?err.stack:null 
      
    })
  } 

  export default globalErrorHandler; 

  /* 
Error Response pattern  
========================
success, 
message, 
errorSource=[{
  path:'', 
  message:'',
}], 
stack,  ---------> this is only development mode 
  */