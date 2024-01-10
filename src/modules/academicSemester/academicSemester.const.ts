import { TCode, TMonth, TName } from "./academicSemester.interface";

export const months: TMonth[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  type TacademicSemesterNameCodeMapper={
    [key:string]:string,
   }; 
   
  export const AcademicSemesterNameCodeMapper:TacademicSemesterNameCodeMapper={
       Autumn:'01', 
       Summer:'02', 
       Fall:'03'
   };
  export const academicSemesterName: TName[] = ['Autumn', 'Summer', 'Fall']; 
  
  export const academicSemesterCode:TCode[]=['01', '02', '03'];