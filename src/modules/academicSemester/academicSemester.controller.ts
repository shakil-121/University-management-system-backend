/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response} from "express";
import catchAsync from "../../app/utils/catchAsync"; 
import httpStatus from 'http-status';
import { AcademicSemesterService } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req,res,next) => {

    const result=await AcademicSemesterService.createAcademicSemesterIntoDB(req.body)


    res.status(200).json({
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    });
  })
 
  const getAllAcademicSemesters=catchAsync(async(req,res)=>{
    const result =await AcademicSemesterService.getAllAcademicSemestersFromDB() 

res.status(httpStatus.OK).json({
    success:true, 
    message:'Academic Semester are retrived successfully', 
    data: result,
})
  }) 

const getSingleAcademicSemester=catchAsync(async(req,res)=>{
    const {semesterId}=req.params; 
    const result=await AcademicSemesterService.getSingleAcademicSemesterFromDB(semesterId); 

    res.status(httpStatus.OK).json({
        success:true, 
        message:'Single Academic Semester are retrived successfully', 
        data: result,
    })
}) 

const updateAcademicSemester = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const result = await AcademicSemesterService.updateAcademicSemesterIntoDB(
      semesterId,
      req.body,
    );

    res.status(httpStatus.OK).json({
        success:true, 
        message:'Single Academic Semester are update successfully', 
        data: result,
    })
  });

  export const AcademicSemesterController={ 
    createAcademicSemester, 
    getAllAcademicSemesters, 
    getSingleAcademicSemester,
    updateAcademicSemester
  }