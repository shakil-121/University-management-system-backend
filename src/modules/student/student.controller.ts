// controller handle requst and response

import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudentData = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentDataIntoDB();
    res.status(200).json({
      success: true,
      message: 'Student are retribe successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudentData = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;
    const result = await studentServices.getSingleStudentDataIntoDB(studentID);
    res.status(200).json({
      success: true,
      message: 'Student is retribe successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudentData,
  getSingleStudentData,
};
