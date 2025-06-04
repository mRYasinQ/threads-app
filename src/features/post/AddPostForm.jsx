import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomForm } from '../../components/Form/CustomForm';
import { SubmitButton } from '../../components/Form/SubmitButton';

import { useAddPostMutation } from '../../app/services/threadApi';

import useNotif from '../../lib/hooks/useNotif';

import addPostSchema from '../../lib/schemas/post/addPostSchema';

export const AddPostForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: zodResolver(addPostSchema) });

    const [addPost] = useAddPostMutation();

    const { showNotif } = useNotif();

    const addPostHandler = async (data) => {
        try {
            const newPost = {
                content: data.content,
                author: localStorage.getItem('fullName') || null,
            };

            await addPost(newPost).unwrap();
            reset();
            showNotif('Post add successfully.', 'top');
        } catch (error) {
            showNotif('Problem exist.', 'top');
        }
    };

    return (
        <CustomForm onSubmit={handleSubmit(addPostHandler)} title="Add Post">
            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="text-base font-semibold text-gray-800 dark:text-gray-200">
                    Content
                </label>
                <textarea
                    {...register('content')}
                    className="h-52 resize-none rounded-xl border border-gray-200 px-4 py-2 text-base font-medium text-gray-900 outline-none placeholder:text-gray-300 dark:border-gray-800 dark:text-gray-100 dark:placeholder:text-gray-700"
                    placeholder="Enter post content..."
                    id="content"
                ></textarea>
                {errors.content?.message && (
                    <p className="text-sm font-medium text-red-500">{errors.content.message}</p>
                )}
            </div>
            <SubmitButton>Add Post</SubmitButton>
        </CustomForm>
    );
};
