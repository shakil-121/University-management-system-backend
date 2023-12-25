import { Router } from "express"; 
import { studentRouters } from "../../modules/student/student.route";
import { UserRouters } from "../../modules/user/user.route";

const router=Router();  

const moduleRouter=[
    {
        path:'/users', 
        route:UserRouters,
    },
    {
        path:'/students', 
        route:studentRouters,
    }
]; 

moduleRouter.forEach((route)=>router.use(route.path,route.route))


export default router;