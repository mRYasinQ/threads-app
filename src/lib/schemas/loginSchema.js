import zod from 'zod';

const loginSchema = zod.object({
    email: zod.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: zod.string().min(3, { message: 'Password must be more than 3 characters.' }).trim(),
});

export default loginSchema;
