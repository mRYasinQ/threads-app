import { Helmet } from 'react-helmet';

import { SingupForm } from '../features/auth/SingupForm';

const SITE_NAME = import.meta.env.VITE_SITE_NAME;

const SignupPage = () => {
    return (
        <>
            <Helmet>
                <title>Signup • {SITE_NAME}</title>
            </Helmet>
            <SingupForm />
        </>
    );
};

export default SignupPage;
