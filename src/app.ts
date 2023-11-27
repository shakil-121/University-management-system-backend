import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { studentRouters } from './modules/student/student.route';
const app: Application = express();

//parse
app.use(express.json());
app.use(cors());

//application routers
app.use('/api/v1/students', studentRouters);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

export default app;
