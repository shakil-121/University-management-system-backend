import { TacademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartmentModel } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB=async(payload:TacademicDepartment)=>{

    const result=await AcademicDepartmentModel.create(payload); 

    return result;
}  

const getAllAcademicDepartmentIntoDB=async()=>{
    const result=(await AcademicDepartmentModel.find().populate('academicFaculty')); 

    return result;
}

const getSingleAcademicDepartmentIntoDB=async(id:string)=>{
    const result=await AcademicDepartmentModel.findById(id); 

    return result;
}

const updateAcademicDepartment=async(id:string,payload:Partial<TacademicDepartment>)=>{
    const result=await AcademicDepartmentModel.findOneAndUpdate({_id:id},payload,{new:true}); 

    return result;
}

export const AcademicDepartmentService={
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentIntoDB,
    getSingleAcademicDepartmentIntoDB,
    updateAcademicDepartment
}