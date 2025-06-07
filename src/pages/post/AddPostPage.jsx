import { Helmet } from 'react-helmet';

import { AddPostForm } from '../../features/post/AddPostForm';

import { createPageTitle } from '../../lib/helpers/createPageTitle';

const AddPostPage = () => {
    return (
        <>
            <Helmet>
                <title>{createPageTitle('Add Post')}</title>
            </Helmet>
            <AddPostForm />
        </>
    );
};

export default AddPostPage;
