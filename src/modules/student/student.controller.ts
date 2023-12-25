// controller handle request and response
import { studentServices } from './student.service';
import catchAsync from '../../app/utils/catchAsync';
// import studentValidationSchema from './student.joi.validation';



const getAllStudentData = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentDataIntoDB();
  res.status(200).json({
    success: true,
    message: 'Student are retribe successfully',
    data: result,
  });

}) 

const DeleteStudentData=catchAsync(async (req,res)=>{
 
  const {studentID}=req.params;
  const result=await studentServices.DeleteStudentDataIntoDB(studentID); 
  res.status(200).json({
    success:true, 
    message:'student are deleted succesfully', 
    data:result,
  })

})

const getSingleStudentData = catchAsync(async (req, res) => {
  
  const { studentID } = req.params;
  const result = await studentServices.getSingleStudentDataIntoDB(studentID); 

  //  if (!result) {
  //   return res.status(404).json({
  //     success: false,
  //     message: 'No data found for the provided studentID',
  //   });
  // }
  res.status(200).json({
    success: true,
    message: 'Student is retribe successfully',
    data: result,
  }); 
 
})

export const studentControllers = {
  getAllStudentData,
  getSingleStudentData,
  DeleteStudentData
};
