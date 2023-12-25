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
      profileImg: z.string().optional(),
    }),
  }),
});

export const StudentvalidationSchema = {
  CreateStudentvalidationSchema,
};
