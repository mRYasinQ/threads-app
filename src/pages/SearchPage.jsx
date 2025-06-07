import { Helmet } from 'react-helmet';

import { Sidebar } from '../components/Sidebar';

import { createPageTitle } from '../lib/helpers/createPageTitle';

const SearchPage = () => {
    return (
        <>
            <Helmet>
                <title>{createPageTitle('Search')}</title>
            </Helmet>
            <Sidebar />
            <main></main>
        </>
    );
};

export default SearchPage;
