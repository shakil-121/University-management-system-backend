// controller handle requst and response

import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
// import studentValidationSchema from './student.joi.validation';



const getAllStudentData = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await studentServices.getAllStudentDataIntoDB();
    res.status(200).json({
      success: true,
      message: 'Student are retribe successfully',
      data: result,
    });
  } catch (err) {
    next(err)
  }
}; 

const DeleteStudentData=async (req:Request,res:Response,next:NextFunction)=>{
  try{ 
    const {studentID}=req.params;
    const result=await studentServices.DeleteStudentDataIntoDB(studentID); 
    res.status(200).json({
      success:true, 
      message:'student are deleted succesfully', 
      data:result,
    })
  } 

  catch (err) {
   next(err);
} 
};

const getSingleStudentData = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { studentID } = req.params;
    const result = await studentServices.getSingleStudentDataIntoDB(studentID); 

    //  if (!result) {
    //   return res.status(404).json({
    //     success: false,
    //     message: 'No data found for the provided studentID',
    //   });
    // }
    res.status(200).json({
      success: true,
      message: 'Student is retribe successfully',
      data: result,
    }); 
   
  } catch (err) {
   next(err);
  }
};

export const studentControllers = {
  getAllStudentData,
  getSingleStudentData,
  DeleteStudentData
};
