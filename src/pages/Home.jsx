import { Helmet } from 'react-helmet';

import { Sidebar } from '../components/Sidebar';

const SITE_NAME = import.meta.env.VITE_SITE_NAME;

const Home = () => {
    return (
        <>
            <Helmet>
                <title>{SITE_NAME}</title>
            </Helmet>
            <Sidebar />
            <main></main>
        </>
    );
};

export default Home;
