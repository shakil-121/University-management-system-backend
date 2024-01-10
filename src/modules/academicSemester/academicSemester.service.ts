import { AcademicSemesterNameCodeMapper } from "./academicSemester.const";
import { TacademicSemester } from "./academicSemester.interface"
import { AcademicSemesterModel } from "./academicSemester.model"

const createAcademicSemesterIntoDB=async(payLoad:TacademicSemester)=>{

//check the semester code validation 
if(AcademicSemesterNameCodeMapper[payLoad.name]!==payLoad.code){
    throw new Error('Invalid Semester Code')
}

const result =await AcademicSemesterModel.create(payLoad);  
return result;

}   

const getAllAcademicSemestersFromDB=async()=>{
    const result=await AcademicSemesterModel.find(); 

    return result;
}

const getSingleAcademicSemesterFromDB=async(id:string)=>{
    const result=await AcademicSemesterModel.findById(id); 

    return result;
} 


const updateAcademicSemesterIntoDB=async(id:string,payload:Partial<TacademicSemester>)=>{
    if(payload.name && payload.code && AcademicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Invalid semester Code');
    } 
    const result=await AcademicSemesterModel.findOneAndUpdate({_id:id},payload,{new:true}); 

    return result;
}



export const AcademicSemesterService={
    createAcademicSemesterIntoDB, 
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB
}