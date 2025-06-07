import { Link } from 'react-router';

export const RowResult = ({ id, author, content }) => {
    return (
        <Link to={`/post/${id}`} className="flex flex-col gap-1 px-8 py-4">
            <h5 className="w-fit text-lg font-semibold text-gray-800 dark:text-gray-200">{author}</h5>
            <p className="line-clamp-1 text-base font-medium text-gray-700 dark:text-gray-300">{content}</p>
        </Link>
    );
};
