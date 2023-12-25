import { Model, Types } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TuserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TStudent = {
  id: string;  
  user:Types.ObjectId,
  name: TuserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  permanentAddress: string;
  presentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isDeleted:boolean;
};
//for creating static 
export interface StudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExist(id:string):Promise<TStudent | null>
}



//for creating instance 

// export type studentMethods = {
//   isUserExist(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   studentMethods
// >;
