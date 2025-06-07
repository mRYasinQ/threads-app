import { Helmet } from 'react-helmet';

import { Sidebar } from '../components/Sidebar';
import { SearchBar } from '../components/Search/SearchBar';

import { createPageTitle } from '../lib/helpers/createPageTitle';

const SearchPage = () => {
    return (
        <>
            <Helmet>
                <title>{createPageTitle('Search')}</title>
            </Helmet>
            <Sidebar />
            <main>
                <SearchBar />
            </main>
        </>
    );
};

export default SearchPage;
