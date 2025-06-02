import zod from 'zod';

const reportSchema = zod.object({
    detail: zod.string().min(5),
});

export default reportSchema;
