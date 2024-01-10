import mongoose from 'mongoose';
import config from '../../app/config';
import { AcademicSemesterModel } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { user } from './user.model';
import { genaratedStudentID } from './user.utils';
import AppError from '../../app/Errors/AppError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // if(await Student.isUserExist(studentData.id)){
  //   throw new Error('User already exist')
  // }

  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given then use default password
  userData.password = password || (config.password as string);

  //set a role
  userData.role = 'student';

  //find academic semester information
  const academicSemesterInfo = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );


  const session = await mongoose.startSession();
  try {
    await session.startTransaction(); 
    //genarate a id
    userData.id = await genaratedStudentID(academicSemesterInfo);

    //create a user (Transaction-01)
    const newUser = await user.create([userData],{session});

    //create a student
    // if (Object.keys(newUser).length) {
    //   payload.id = newUser.id;
    //   payload.user = newUser._id; //refarence id

    //   const newStudent = await Student.create(payload); // built in static method
    //   return newStudent;
    // } 
    if(!newUser.length){
      throw new AppError(httpStatus.BAD_REQUEST,'Failed to create user')
    } 
    payload.id=newUser[0].id; 
    payload.user=newUser[0]._id; 

    //create a student (Transaction -02) 
    const newStudent=await Student.create([payload],{session}); 
    if(!newStudent.length){
      throw new AppError(httpStatus.BAD_REQUEST,'Failed to create student')
    }

    await session.commitTransaction(); 
    await session.endSession();
  } catch (err) {
    await session.abortTransaction(); 
    await session.endSession(); 
    throw new AppError(httpStatus.BAD_REQUEST,'Failed to commit transaction')
  }

  // const student = new Student(studentData); //create a custome instance
  // if(await student.isUserExist(studentData.id)){
  //   throw new Error('User already Exist')
  // }

  // const result = await student.save(); // built in instance method
};

export const userService = {
  createStudentIntoDB,
};
