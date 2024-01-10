export type TErrorSource={
    path:string | number; 
    message:string;
  }[] 

  export type TGeniricErrorResponse={
    statusCode:number; 
    message:string; 
    errorSources:TErrorSource;
  }