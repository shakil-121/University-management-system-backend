import { Schema, model } from 'mongoose';
// import validator from 'validator';

import {
  TGuardian,
  TStudent,
  TuserName,
  TLocalGuardian,
  StudentModel,
  // studentMethods,
} from './student.interface'; 

const userSchema = new Schema<TuserName>({
  firstName: {
    type: String,
    required: true,
    maxlength: 20,
    trim: true,
    // validate:{
    //   validator:function(value:string){
    //     const firstNameStr=value.charAt(0).toUpperCase()+value.slice(1);
    //     return firstNameStr === value ;
    //   },
    //   message:'{VALUE} is not a capitalization charected string'
    // }
  },
  middleName: { type: String, maxlength: 15, trim: true },
  lastName: {
    type: String,
    required: true,
    maxlength: 20,
    trim: true,
    // validate:{
    //   validator:(value:string)=>validator.isAlpha(value),
    //   message:'{VALUE} is to valid'
    // }
  },
});

const genderSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },  
  user:{type:Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: userSchema,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'The gender field only be one of the following : male , female',
    },
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    // validate:{
    //   validator:(value:string)=>validator.isEmail(value),
    //   message:'{VALUE} is not a valid Email Type'
    // }
  },
  contactNo: { type: String },
  emergencyContactNo: { type: String },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  permanentAddress: { type: String },
  presentAddress: { type: String },
  guardian: genderSchema,
  localGuardian: LocalGuardianSchema,
  admissionSemester:{
    type:Schema.Types.ObjectId, 
    ref:'AcademicSemester'
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
  },
  profileImg: { type: String },
  isDeleted:{
    type:Boolean, 
    default:false
  }
}); 


studentSchema.pre('find', function(next){
  this.find({isDeleted:{$ne:true}})
  next();
}) 

studentSchema.pre('findOne',function(next){
  this.findOne({isDeleted:{$ne:true}})
  next();
})


//creating static method  
studentSchema.statics.isUserExist=async function (id:string){
  const existingUser=await Student.findOne({id}) 

  return existingUser;
}


// //createing a custom instance method
// studentSchema.methods.isUserExist=async function (id:string) {
//   const existingUser=await Student.findOne({id}); 

//   return existingUser;
// }
 
//create model

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
