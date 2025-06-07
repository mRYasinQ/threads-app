import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';

import { Sidebar } from '../../components/Sidebar';
import { Post } from '../../features/post';

import { createPageTitle } from '../../lib/helpers/createPageTitle';

const PostPage = () => {
    const { postId } = useParams();

    return (
        <>
            <Helmet>
                <title>{createPageTitle('Post')}</title>
            </Helmet>
            <Sidebar />
            <main>
                <Post postId={postId} />
            </main>
        </>
    );
};

export default PostPage;
