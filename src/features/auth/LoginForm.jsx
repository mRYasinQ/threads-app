import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomForm } from '../../components/Form/CustomForm';
import { Input } from '../../components/Form/Input';
import { SubmitButton } from '../../components/Form/SubmitButton';

import { useLazyLoginQuery } from '../../app/services/threadApi';

import useNotif from '../../lib/hooks/useNotif';

import { setIsAuthenticated } from './authSlice';

import loginSchema from '../../lib/schemas/loginSchema';

import LoginFields from '../../lib/constants/LoginFields';

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginSchema) });

    const dispatch = useDispatch();
    const [loginUser] = useLazyLoginQuery();

    const navigate = useNavigate();

    const { showNotif } = useNotif();

    const loginHandler = async (data) => {
        try {
            const result = await loginUser(data).unwrap();

            if (result.length > 0) {
                const user = result[0];

                localStorage.setItem('userId', user.id);
                localStorage.setItem('fullName', `${user.first_name} ${user.last_name}`);
                dispatch(setIsAuthenticated(true));

                showNotif('Log In Successfully.', 'bottom');
                navigate('/');
            } else {
                showNotif('Email or password wrong.', 'top');
            }
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
