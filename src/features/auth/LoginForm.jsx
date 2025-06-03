import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomForm } from '../../components/Form/CustomForm';
import { Input } from '../../components/Form/Input';
import { SubmitButton } from '../../components/Form/SubmitButton';

import { useLazyLoginQuery } from '../../app/services/threadApi';

import useNotif from '../../lib/hooks/useNotif';

import loginSchema from '../../lib/schemas/loginSchema';

import LoginFields from '../../lib/constants/LoginFields';

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginSchema) });

    const [loginUser] = useLazyLoginQuery();

    const navigate = useNavigate();

    const { showNotif } = useNotif();

    const loginHandler = async (data) => {
        try {
            await loginUser(data).unwrap();

            showNotif('Log In Successfully.', 'bottom');
            navigate('/');
        } catch (error) {
            showNotif('Problem exist.', 'top');
        }
    };

    return (
        <CustomForm onSubmit={handleSubmit(loginHandler)} title="Log In">
            {LoginFields.map(({ title, id, registerType, type, placeholder }) => (
                <Input
                    key={id}
                    title={title}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    methods={{ ...register(registerType) }}
                    error={errors[registerType]?.message}
                />
            ))}
            <SubmitButton>Log In</SubmitButton>
            <p className="text-center text-sm text-gray-800 dark:text-gray-200">
                Don't have account?{' '}
                <Link to="/signup" className="font-semibold">
                    Sign up
                </Link>
            </p>
        </CustomForm>
    );
};
