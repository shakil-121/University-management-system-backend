/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response} from "express";
import { userService } from "./user.service"; 


//higherOrder Function for handle async controller 
const catchAsync=(fn:RequestHandler)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(fn(req,res,next)).catch((err)=>next(err))
    };
};

const createStudent = catchAsync(async (req,res,next) => {
    const { password,student: studentData } = req.body;
  //   const ZodDataValidation = studentvalidationSchema.parse(studentData);

    //student validation using joi
    // const {error}= studentValidationSchema.validate(studentData)
    const result = await userService.createStudentIntoDB(password,studentData);

    // if(error){
    //   res.status(500).json({
    //     success: false,
    //     message: 'Not Validate data',
    //     error:error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  })


  export const userController={ 
    createStudent
  }