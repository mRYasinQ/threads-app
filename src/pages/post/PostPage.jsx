import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';

import { Sidebar } from '../../components/Sidebar';
import { Post } from '../../features/post';

const SITE_NAME = import.meta.env.VITE_SITE_NAME;

const PostPage = () => {
    const { postId } = useParams();

    return (
        <>
            <Helmet>
                <title>Post • {SITE_NAME}</title>
            </Helmet>
            <Sidebar />
            <main>
                <Post postId={postId} />
            </main>
        </>
    );
};

export default PostPage;
