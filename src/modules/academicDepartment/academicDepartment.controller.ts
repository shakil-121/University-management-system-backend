import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicDepartmentService } from "./academicDepartment.service";

const createAcademicDepartment=catchAsync(async (req,res)=>{
    const result=await AcademicDepartmentService.createAcademicDepartmentIntoDB(req.body); 

    res.status(httpStatus.OK).json({
        success:true, 
        message:'New Academic Department created Successfully', 
        data:result
    }) 

    return result;
});  

const getAllAcademicDepartment=catchAsync(async(req,res)=>{
    const result=await AcademicDepartmentService.getAllAcademicDepartmentIntoDB(); 

    res.status(httpStatus.OK).json({
        success:true, 
        message:'All Academic Department Retrive Successfully', 
        data:result
    }) 
})

const updateAcademicDepartment=catchAsync(async(req,res)=>{
    const {departmentId}=req.params; 
    const result=await AcademicDepartmentService.updateAcademicDepartment(departmentId,req.body); 

    res.status(httpStatus.OK).json({
        success:true, 
        message:'Academic Department Update Successfully', 
        data:result
    }) 
}) 

const getSingleAcademicDepartment=catchAsync(async(req,res)=>{
    const {departmentId}=req.params; 
    const result=await AcademicDepartmentService.getSingleAcademicDepartmentIntoDB(departmentId) ;

    res.status(httpStatus.OK).json({
        success:true, 
        message:'Single Academic Department Retive Successfully', 
        data:result,
    })
})

export const AcademicDepartmentController={
    createAcademicDepartment,
    getAllAcademicDepartment,
    updateAcademicDepartment,
    getSingleAcademicDepartment

}
