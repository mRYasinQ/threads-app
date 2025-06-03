import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomForm } from '../../components/Form/CustomForm';
import { Input } from '../../components/Form/Input';
import { SubmitButton } from '../../components/Form/SubmitButton';

import { useRegisterMutation } from '../../app/services/threadApi';

import useNotif from '../../lib/hooks/useNotif';

import signupSchema from '../../lib/schemas/SignupSchema';

import SignupFields from '../../lib/constants/SignupFields';

export const SingupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const [registerUser] = useRegisterMutation();

    const navigate = useNavigate();

    const { showNotif } = useNotif();

    const signupHandler = async (data) => {
        try {
            const newUser = {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                password: data.confirmPassword,
            };

            await registerUser(newUser).unwrap();

            showNotif('Register successfully.', 'top');
            navigate('/login');
        } catch (error) {
            showNotif('Problem exist.', 'top');
        }
    };

    return (
        <CustomForm onSubmit={handleSubmit(signupHandler)} title="Sign Up">
            {SignupFields.map(({ title, id, registerType, type, placeholder }) => (
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
            <SubmitButton>Sign Up</SubmitButton>
            <p className="text-center text-sm text-gray-800 dark:text-gray-200">
                Have account?{' '}
                <Link to="/login" className="font-semibold">
                    Log In
                </Link>
            </p>
        </CustomForm>
    );
};
