import { Helmet } from 'react-helmet';

import { NotFound } from '../components/NotFound';

import { createPageTitle } from '../lib/helpers/createPageTitle';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>{createPageTitle('Not Found')}</title>
            </Helmet>
            <main>
                <NotFound />
            </main>
        </>
    );
};

export default NotFoundPage;
