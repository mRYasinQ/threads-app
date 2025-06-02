import { useDispatch } from 'react-redux';

import { ReportProblemForm } from './ReportProblemForm';

import { closeReportModal } from './reportSlice';

import { RemoveIcon } from '../../icons/RemoveIcon';

export const ReportProblem = () => {
    const dispatch = useDispatch();

    const closeModalHandler = () => dispatch(closeReportModal());

    return (
        <div className="fixed top-0 left-0 z-10 h-full w-full">
            <div
                onClick={closeModalHandler}
                className="fixed top-0 left-0 z-10 h-full w-full bg-white/15 backdrop-blur-sm dark:bg-black/15"
            ></div>
            <div
                onClick={closeModalHandler}
                className="fixed top-8 left-8 z-20 flex size-11 cursor-pointer items-center justify-center rounded-full bg-gray-100 stroke-gray-400 duration-200 hover:scale-110 dark:bg-gray-900 dark:stroke-gray-700"
            >
                <RemoveIcon />
            </div>
            <div className="relative top-1/2 z-20 mx-auto flex h-fit w-full -translate-y-1/2 flex-col items-center justify-center gap-4 px-4 sm:w-110 sm:px-0">
                <h4 className="text-center text-lg font-bold text-gray-800 dark:text-gray-200">Report a problem</h4>
                <ReportProblemForm closeModal={closeModalHandler} />
            </div>
        </div>
    );
};
