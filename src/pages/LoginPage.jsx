import { Helmet } from 'react-helmet';

import { LoginForm } from '../features/auth/LoginForm';

import { createPageTitle } from '../lib/helpers/createPageTitle';

const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>{createPageTitle('Login')}</title>
            </Helmet>
            <LoginForm />
        </>
    );
};

export default LoginPage;
