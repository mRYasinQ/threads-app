import { Helmet } from 'react-helmet';

import { Sidebar } from '../components/Sidebar';

const SITE_NAME = import.meta.env.VITE_SITE_NAME;

const SearchPage = () => {
    return (
        <>
            <Helmet>
                <title>Search • {SITE_NAME}</title>
            </Helmet>
            <Sidebar />
            <main></main>
        </>
    );
};

export default SearchPage;
