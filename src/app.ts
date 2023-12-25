/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import { studentRouters } from './modules/student/student.route';
import { UserRouters } from './modules/user/user.route';
import globalErrorHandler from './app/middlware/globalErrorHandler';
import notFound from './app/middlware/notFound';
import router from './app/router';
const app: Application = express();

//parse
app.use(express.json());
app.use(cors());

//application routers
app.use('/api/v1', router);


const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController); 

//global error handler middleware 
app.use(globalErrorHandler); 

//Not Found  
app.use(notFound)

export default app;
