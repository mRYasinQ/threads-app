import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAddReportMutation } from '../../app/services/threadApi';

import reportSchema from '../../lib/schemas/reportSchema';

export const ReportProblemForm = ({ closeModal }) => {
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm({ resolver: zodResolver(reportSchema) });

    const [addReport] = useAddReportMutation();

    const submitReport = async (data) => {
        try {
            await addReport(data).unwrap();

            // TODO:
            console.log('Success.');
        } catch (error) {
            // TODO:
            console.log('Error.');
        } finally {
            closeModal();
        }
    };

    return (
        <form onSubmit={handleSubmit(submitReport)} className="h-full w-full">
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-col">
                    <textarea
                        {...register('detail')}
                        className="h-20 w-full resize-none text-gray-900 outline-none placeholder:text-gray-300 dark:text-gray-100 dark:placeholder:text-gray-700"
                        placeholder="Please include as many details as possible..."
                    ></textarea>
                    <div className="flex items-center justify-end pt-8">
                        <button
                            disabled={!isValid}
                            type="submit"
                            className="w-fit cursor-pointer rounded-xl border border-gray-200 bg-transparent px-4 py-1.5 text-sm font-semibold text-gray-800 disabled:cursor-not-allowed disabled:text-gray-300 dark:border-gray-800 dark:text-gray-200 dark:disabled:text-gray-700"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
