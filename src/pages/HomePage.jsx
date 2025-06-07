import { Helmet } from 'react-helmet';

import { Sidebar } from '../components/Sidebar';
import { Posts } from '../features/post/Posts';

import { createPageTitle } from '../lib/helpers/createPageTitle';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>{createPageTitle('Home')}</title>
            </Helmet>
            <Sidebar />
            <main>
                <Posts />
            </main>
        </>
    );
};

export default HomePage;
