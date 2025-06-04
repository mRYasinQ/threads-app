import zod from 'zod';

const addPostSchema = zod.object({
    content: zod.string().min(3, { message: 'Content must be more than 3 characters.' }).trim(),
});

export default addPostSchema;
