import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../components/Logo';
import InputField from '../../components/Login/InputField';
import PasswordField from '../../components/Login/PasswordField';
import RememberMe from '../../components/Login/Remember';
import SignInButton from '../../components/Login/FormButton';
import { LuUsers } from 'react-icons/lu';

interface LoginFormInputs {
    username: string;
    password: string;
    rememberMe: boolean;
}

const LoginPage: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFormInputs>();
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const username = watch('username');
    const password = watch('password');

    const onSubmit = async (data: LoginFormInputs) => {
        setLoading(true);
        try {
            console.log('Sending request...');
            const response = await fetch(import.meta.env.VITE_API_URL || '', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usr: data.username,
                    pwd: data.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Response received:', result);

            toast.success('Sign in successful!');
            console.log('Toast success should be displayed');
            login();
            navigate('/home');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            toast.error('Sign in failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col h-full'>
            <ToastContainer />
            <div>
                <Logo />
            </div>

            <div className='w-full flex flex-col justify-center gap-2 items-center min-h-[70vh]'>
                <h1 className='text-2xl font-bold text-center'>Sign in</h1>
                <p className='text-gray'>Don’t have an account yet? <span className='text-blue font-semibold'>sign up here</span></p>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full sm:w-[50%] lg:w-[30%] px-8 lg:px-2 flex flex-col gap-2 items-center mt-2'>
                    <InputField
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="ali@brandim.com"
                        register={register}
                        error={errors.username}
                        icon={LuUsers}
                    />
                    <PasswordField
                        label="Password"
                        name="password"
                        placeholder="your password"
                        register={register}
                        error={errors.password}
                    />
                    <RememberMe register={register} />
                    <SignInButton
                        loading={loading}
                        disabled={!username || !password || loading}
                        username={username}
                        password={password}
                    />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
