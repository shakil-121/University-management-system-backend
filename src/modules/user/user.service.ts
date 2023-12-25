import config from '../../app/config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { user } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if(await Student.isUserExist(studentData.id)){
  //   throw new Error('User already exist')
  // }

  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given then use default password
  userData.password = password || (config.password as string);

  //set a role
  userData.role = 'student';

  //genarate a id manually --> we update it in automated process
  userData.id = '2023100001';

  //create a user
  const newUser = await user.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //refarence id

    const newStudent = await Student.create(studentData); // built in static method
    return newStudent;
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
