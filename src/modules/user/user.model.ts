import { Schema, model } from "mongoose";
import { TUser } from "./user.interface"; 
import bcrypt from 'bcrypt';
import config from "../../app/config";



const userSchema=new Schema<TUser>({
    id:{type:String,required:true}, 
    password:{type:String,required:true},
    needsPasswordChange:{type:Boolean}, 
    role:{
        type:String, 
        enum:['admin','student','faculty'],
    }, 
    status:{
        type:String, 
        enum:['in-progress','blocked'], 
        default:'in-progress'
    }, 
    isDeleted:{
        type:Boolean, 
        default:false,
    }

},
    {
    timestamps:true
    }

); 

//create custom middleware or hook 
userSchema.pre('save',async function(next){ 
  //hasing password and save it into the database 
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user=this;  
  user.password=await bcrypt.hash(user.password,Number(config.bcrypt_salt_round))

  next();
});

//create a post middleware or hook 
userSchema.post('save',function(doc,next){
  doc.password=''; 
  next();
});

export const user=model<TUser>('user',userSchema)