import { AcademicSemesterRoute } from './../../modules/academicSemester/academicSemester.route';
import { Router } from "express"; 
import { studentRouters } from "../../modules/student/student.route";
import { UserRouters } from "../../modules/user/user.route";
import { AcademicFacultyRoute } from '../../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../../modules/academicDepartment/academicDepartment.route';

const router=Router();  

const moduleRouter=[
    {
        path:'/users', 
        route:UserRouters,
    },
    {
        path:'/students', 
        route:studentRouters,
    }, 
    {
        path:'/academic-semesters', 
        route:AcademicSemesterRoute
    },
    {
        path:'/academic-faculty', 
        route:AcademicFacultyRoute
    },
    {
        path:'/academic-department', 
        route:AcademicDepartmentRoutes
    }
]; 

moduleRouter.forEach((route)=>router.use(route.path,route.route))


export default router;