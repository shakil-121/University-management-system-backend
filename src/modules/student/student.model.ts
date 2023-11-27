import { Schema, model } from 'mongoose';
import {
  Guardian,
  Student,
  userName,
  LocalGuardian,
} from './student.interface';

const userSchema = new Schema<userName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const genderSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String },
  contactNo: { type: String },
  emergencyContactNo: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  permanentAddress: { type: String },
  presentAddress: { type: String },
  guardian: genderSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

//create model

export const StudentModel = model<Student>('Student', studentSchema);
