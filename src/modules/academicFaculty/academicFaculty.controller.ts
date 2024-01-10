import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty=catchAsync(async(req,res)=>{
    const result=await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body);  

    res.status(httpStatus.OK).json({
        success:true, 
        message:'Academic Faculty created Successfully', 
        data:result
    })

    return result;
});  

const getAllAcademicFaculty=catchAsync(async(req,res)=>{
    const result=await AcademicFacultyServices.getAllAcademicFacultyIntoDB(); 

    res.status(httpStatus.OK).json({
        success:true, 
        message:'All Academic Faculty Retrive Successfully', 
        data:result
    })
})

const getSingleAcademicFaculty=catchAsync(async(req,res)=>{
    const {facultyId}=req.params; 
    const result=await AcademicFacultyServices.getSingleAcademicFacultyIntoDB(facultyId);

    res.status(httpStatus.OK).json({
        success:true, 
        message:'Single Faculty Data Retrive Successfully', 
        data:result,
    })
}) 

const UpdateAcademicFaculty=catchAsync(async(req,res)=>{ 
    const {facultyId}=req.params; 
    const result=await AcademicFacultyServices.updateAcademicFacultyIntoDB(facultyId,req.body) 

    res.status(httpStatus.OK).json({
        success:true, 
        message:'Single Faculty Data Update Successfully', 
        data:result,
    })
})

export const AcademicFacultyController={
    createAcademicFaculty,
    getAllAcademicFaculty,
    getSingleAcademicFaculty,
    UpdateAcademicFaculty
}