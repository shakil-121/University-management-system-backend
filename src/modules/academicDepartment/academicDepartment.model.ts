import { Schema, model } from "mongoose";
import { TacademicDepartment } from "./academicDepartment.interface";
import AppError from "../../app/Errors/AppError";


const academicDepartmentSchema=new Schema<TacademicDepartment>({
    name:{type:String,required:true}, 
    academicFaculty:{
        type:Schema.Types.ObjectId, 
        ref:'academicFaculty'
    }
},
{
    timestamps:true,
}); 

academicDepartmentSchema.pre('save',async function(next){
    const isDepartmentExist=await AcademicDepartmentModel.findOne({
        name:this.name
    }); 

    if(isDepartmentExist){
        throw new AppError(404,'Department Already Exist !!')
    }; 

    next();
}); 

academicDepartmentSchema.pre('findOneAndUpdate',async function(next){
    const quary=this.getQuery();  

    const isDepartmentExist=await AcademicDepartmentModel.findOne(quary); 

    if(!isDepartmentExist){
        throw new AppError(404,'This Department is not Exist !')
    } 
    next();
})

export const AcademicDepartmentModel=model<TacademicDepartment>('AcademicDepartment',academicDepartmentSchema)