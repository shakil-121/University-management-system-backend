/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response} from "express";
import { userService } from "./user.service"; 
import catchAsync from "../../app/utils/catchAsync";

const createStudent = catchAsync(async (req,res,next) => {
    const { password,student: studentData } = req.body;

    const result = await userService.createStudentIntoDB(password,studentData);


    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  })


  export const userController={ 
    createStudent
  }