import { TacademicFaculty } from "./academicFacaulty.interface";
import { academicFacultyModel } from "./academicFacaulty.model";

const createAcademicFacultyIntoDB=async(payload:TacademicFaculty)=>{
    const result = await academicFacultyModel.create(payload); 

    return result;
}  

const getAllAcademicFacultyIntoDB=async()=>{
    const result=await academicFacultyModel.find(); 

    return result;
} 

const getSingleAcademicFacultyIntoDB=async(id:string)=>{
    const result=await academicFacultyModel.findById(id); 

    return result;
}

const updateAcademicFacultyIntoDB=async(id:string,payload:Partial<TacademicFaculty>)=>{

    const result=await academicFacultyModel.findOneAndUpdate({_id:id},payload,{new:true}); 

    return result;
}

export const AcademicFacultyServices={
    createAcademicFacultyIntoDB, 
    getAllAcademicFacultyIntoDB, 
    getSingleAcademicFacultyIntoDB,
    updateAcademicFacultyIntoDB
}