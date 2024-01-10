import mongoose from 'mongoose';
import { TStudent } from './student.interface';
import { Student } from './student.model';
import AppError from '../../app/Errors/AppError';
import httpStatus from 'http-status';
import { user } from '../user/user.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  if(await Student.isUserExist(studentData.id)){ 
    throw new Error('User already exist')
  } 
  const result = await Student.create(studentData); // built in static method


  // const student = new Student(studentData); //create a custome instance  
  // if(await student.isUserExist(studentData.id)){ 
  //   throw new Error('User already Exist')
  // }
  
  // const result = await student.save(); // built in instance method

  return result;
};

const getAllStudentDataIntoDB = async () => {
  const result = await Student.find().populate('admissionSemester').populate({
    path:'academicDepartment', 
    populate:{
      path:'academicFaculty'
    }
  });
  return result;
};

const updateStudent=async(id:string,payload:Partial<TStudent>)=>{
  const {name,guardian,localGuardian,...remainingStudentData}=payload; 

  const modifiedUpdateData:Record<string,unknown>={...remainingStudentData};

  if(name && Object.keys(name).length){
    for(const [key,value] of Object.entries(name)){
      modifiedUpdateData[`name.${key}`] = value;
    }
  }
  if(guardian && Object.keys(guardian).length){
    for(const [key,value] of Object.entries(guardian)){
      modifiedUpdateData[`guardian.${key}`] = value;
    }
  }
  if(localGuardian && Object.keys(localGuardian).length){
    for(const [key,value] of Object.entries(localGuardian)){
      modifiedUpdateData[`localGuardian.${key}`] = value;
    }
  } 
 
  console.log(modifiedUpdateData);
  const result=await Student.findOneAndUpdate({id},modifiedUpdateData,{
    new: true,
    runValidators: true,}); 

  return result;
}

const DeleteStudentDataIntoDB = async (id:string) => {
  const session=await mongoose.startSession(); 
try{
  await session.startTransaction();
  const studentDelete = await Student.findOneAndUpdate(
    {id},
    {isDeleted:true},
    {new:true,session}
    );
  
    if(!studentDelete){
      throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete student !')
    } 

    const userDelete=await user.findOneAndUpdate({id},{isDeleted:true},{new:true,session}); 

    if(!userDelete){
      throw new AppError(httpStatus.BAD_REQUEST,'Failed to Delete User')
    } 

    await session.commitTransaction(); 
    await session.endSession()

  return {studentDelete,userDelete};

}catch(err){ 
  await session.abortTransaction(); 
  await session.endSession(); 

  throw new AppError(httpStatus.BAD_REQUEST,'Failed to Transaction')

}
};

const getSingleStudentDataIntoDB = async (id: string) => {
  const result = await Student.findOne({ id }).populate({
    path:'academicDepartment', 
    populate:{
      path:'academicFaculty'
    }
  });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentDataIntoDB,
  getSingleStudentDataIntoDB,
  DeleteStudentDataIntoDB,
  updateStudent
};
