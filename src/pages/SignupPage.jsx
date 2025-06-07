import { Helmet } from 'react-helmet';

import { SingupForm } from '../features/auth/SingupForm';

import { createPageTitle } from '../lib/helpers/createPageTitle';

const SignupPage = () => {
    return (
        <>
            <Helmet>
                <title>{createPageTitle('Singup')}</title>
            </Helmet>
            <SingupForm />
        </>
    );
};

export default SignupPage;
