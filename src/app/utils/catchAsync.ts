import { NextFunction, Request, RequestHandler, Response } from "express";

//higherOrder Function for handle async controller 
const catchAsync=(fn:RequestHandler)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(fn(req,res,next)).catch((err)=>next(err))
    };
}; 

export default catchAsync;  