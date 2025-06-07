import { Helmet } from 'react-helmet';

import { Sidebar } from '../components/Sidebar';
import { Posts } from '../features/post/Posts';

const SITE_NAME = import.meta.env.VITE_SITE_NAME;

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>{SITE_NAME}</title>
            </Helmet>
            <Sidebar />
            <main>
                <Posts />
            </main>
        </>
    );
};

export default HomePage;
