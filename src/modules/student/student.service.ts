import { TStudent } from './student.interface';
import { Student } from './student.model';

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
  const result = await Student.find();
  return result;
};

const DeleteStudentDataIntoDB = async (id:string) => {
  const result = await Student.updateOne({id},{isDeleted:true});
  return result;
};

const getSingleStudentDataIntoDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentDataIntoDB,
  getSingleStudentDataIntoDB,
  DeleteStudentDataIntoDB
};
