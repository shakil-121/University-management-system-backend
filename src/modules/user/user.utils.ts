// Genarate Student ID  

import { TacademicSemester } from "../academicSemester/academicSemester.interface"; 
import { user } from "./user.model";


const findLastStudentID=async()=>{
  const LastStudent= await user.findOne({
    role:"student"
  },{
    id:1, 
    _id:0
  }).sort({
    createdAt:-1 
  }).lean(); 

  //203001 0001 
  return LastStudent?.id?LastStudent.id:undefined;
}

export const genaratedStudentID=async(payload:TacademicSemester)=>{
    let currentID=(0).toString();  
    const lastStudentID=await findLastStudentID();  
    //2030 01 0001 
    const lastSudentSemesterCode=lastStudentID?.substring(4,6); 
    const lastStudentSemesterYear=lastStudentID?.substring(0,4); 
    const currentSemesterCode=payload.code; 
    const currentYear=payload.year; 

    if(lastStudentID && lastSudentSemesterCode === currentSemesterCode && lastStudentSemesterYear === currentYear){ 
      currentID=lastStudentID.substring(6);
    }


    let incrementID=(Number(currentID)+1).toString().padStart(4,'0');

    incrementID = `${payload.year}${payload.code}${incrementID}`;

  return incrementID;
} 