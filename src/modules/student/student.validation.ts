import { z } from 'zod';

const genderValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const userValidationSchema = z.object({
  firstName: z.string().max(20, { message: 'First name is required' }),
  middleName: z.string().max(15).optional(),
  lastName: z.string().max(20),
});

const CreateStudentvalidationSchema = z.object({
  body: z.object({
    password: z.string({ required_error: 'Password is required' }),
    student: z.object({
      name: userValidationSchema,
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      permanentAddress: z.string(),
      presentAddress: z.string(),
      guardian: genderValidationSchema,
      localGuardian: LocalGuardianValidationSchema,
      admissionSemester: z.string(),
      academicDepartment: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

const updategenderValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

const updateuserValidationSchema = z.object({
  firstName: z.string().max(20, { message: 'First name is required' }).optional(),
  middleName: z.string().max(15).optional(),
  lastName: z.string().max(20).optional(),
});

export const updateCreateStudentvalidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateuserValidationSchema.optional(),
      gender: z.enum(['male', 'female']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      permanentAddress: z.string().optional(),
      presentAddress: z.string().optional(),
      guardian: updategenderValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
      profileImg: z.string().optional(),
    }),
  }),
});




export const StudentvalidationSchema = {
  CreateStudentvalidationSchema,
  updateCreateStudentvalidationSchema
};
