import zod from 'zod';

const signupSchema = zod
    .object({
        firstName: zod.string().min(2).max(20).trim(),
        lastName: zod.string().min(2).max(20).trim(),
        email: zod.string().email({ message: 'Please enter a valid email.' }).trim(),
        password: zod.string().min(3, { message: 'Password must be more than 3 characters.' }).trim(),
        confirmPassword: zod.string().min(3, { message: 'Confirm password must be more than 3 characters.' }).trim(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password don't match with confirm password.",
        path: ['confirmPassword'],
    });

export default signupSchema;
