import Joi from "joi"  

const genderValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

const LocalGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

const userValidationSchema = Joi.object({
  firstName: Joi.string().required().max(20).trim(),
  middleName: Joi.string().max(15).trim(),
  lastName: Joi.string().required().max(20).trim(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userValidationSchema.required(),
  gender: Joi.string().valid('male', 'female').required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().email(),
  contactNo: Joi.string(),
  emergencyContactNo: Joi.string(),
  bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required(),
  permanentAddress: Joi.string(),
  presentAddress: Joi.string(),
  guardian: genderValidationSchema.required(),
  localGuardian: LocalGuardianValidationSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
}); 

export default studentValidationSchema;