import { Helmet } from 'react-helmet';

import { Sidebar } from '../components/Sidebar';

const SITE_NAME = import.meta.env.VITE_SITE_NAME;

const Search = () => {
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

export default Search;
