import { Schema, model } from 'mongoose';
import { TacademicSemester } from './academicSemester.interface';
import { academicSemesterCode, academicSemesterName, months } from './academicSemester.const';



const academicSemesterSchema = new Schema<TacademicSemester>(
  {
    name: { type: String, enum: academicSemesterName, required: true },
    year: { type: String, required: true },
    code: { type: String,enum:academicSemesterCode, required: true },
    startMonth: {
      type: String,
      enum: months,
    },
    endMonth: {
      type: String,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
); 

academicSemesterSchema.pre('save',async function(next){
  const isSemesterExist=await AcademicSemesterModel.findOne({
    year:this.year, 
    name:this.name,
  }); 
  if(isSemesterExist){
    throw new Error('Semester or Year are duplicated')
  } 
  next();
})


export const AcademicSemesterModel = model<TacademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
