import { Helmet } from 'react-helmet';

import { AddPostForm } from '../../features/post/AddPostForm';

const SITE_NAME = import.meta.env.VITE_SITE_NAME;

const AddPost = () => {
    return (
        <>
            <Helmet>
                <title>Add Post • {SITE_NAME}</title>
            </Helmet>
            <AddPostForm />
        </>
    );
};

export default AddPost;
