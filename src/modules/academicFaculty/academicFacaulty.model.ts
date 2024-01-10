import { Schema, model } from "mongoose";
import { TacademicFaculty } from "./academicFacaulty.interface";

const academicFacultySchema=new Schema<TacademicFaculty>({ 
    name:{type:String,required:true,unique:true}
},

{
    timestamps:true
}) 

export const academicFacultyModel=model<TacademicFaculty>('academicFaculty',academicFacultySchema)
