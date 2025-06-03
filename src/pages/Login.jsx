import { Helmet } from 'react-helmet';

import { LoginForm } from '../features/auth/LoginForm';

const SITE_NAME = import.meta.env.VITE_SITE_NAME;

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login • {SITE_NAME}</title>
            </Helmet>
            <LoginForm />
        </>
    );
};

export default Login;
