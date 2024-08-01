import React, { useState } from 'react';
import Logo from '../../components/Logo';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { LuUsers, LuLock, LuEyeOff, LuEye } from "react-icons/lu";

const LoginPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook
    const username = watch('username');
    const password = watch('password');

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await fetch('https://shippex-demo.bc.brandimic.com/api/method/login', {
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
            console.log(result);

            // Assuming the login is successful, navigate to the home page
            navigate('/home');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col h-full'>
            <div>
                <Logo />
            </div>

            <div className='w-full flex flex-col justify-center gap-2 items-center my-32'>
                <h1 className='text-2xl font-bold text-center'>Sign in</h1>
                <p className='text-gray'>Don’t have an account yet? <span className='text-blue font-semibold'>sign up here</span></p>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full sm:w-[50%] lg:w-[30%] px-8 lg:px-2 flex flex-col gap-2 items-center mt-2'>
                    <label className='w-full'>
                        <p className='font-semibold text-secondary-dark'>Username</p>
                        <div className='relative flex items-center'>
                            <LuUsers className='absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400' />
                            <input
                                type='text'
                                placeholder='ali@brandim|'
                                {...register('username', { required: true })}
                                className='border rounded-lg border-secondary p-4 pl-10 mt-2 w-full'
                            />
                        </div>
                        {errors.username && <span className='text-red-500 text-left'>Username is required</span>}
                    </label>

                    <div className='w-full'>
                        <label>
                            <div className='w-full flex justify-between items-center'>
                                <p className='font-semibold text-secondary-dark'>Password</p>
                                <Link to='#' className='text-blue m-2 font-semibold'>Forgot Password?</Link>
                            </div>
                            <div className='relative flex items-center'>
                                <LuLock className='absolute left-3 top-[60%] transform -translate-y-1/2 text-gray' />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='your password'
                                    {...register('password', { required: true })}
                                    className='border rounded-lg border-secondary p-4 pl-10 mt-2 w-full'
                                />
                                <div
                                    className='absolute right-3 top-[60%] transform -translate-y-1/2 cursor-pointer'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <LuEyeOff className='text-gray-400' /> : <LuEye className='text-gray-400' />}
                                </div>
                            </div>
                            {errors.password && <span className='text-red-500 text-left'>Password is required</span>}
                        </label>
                    </div>

                    <div className='w-full flex items-center'>
                        <input
                            type='checkbox'
                            {...register('rememberMe')}
                            className='w-[10%] mt-2'
                        />
                        <label className='text-secondary-dark font-medium text-base'>Remember me</label>
                    </div>

                    <button
                        type='submit'
                        className={`w-full text-white p-2 m-2 flex justify-center items-center ${!username || !password ? 'bg-light-blue cursor-not-allowed' : 'bg-blue'}`}
                        disabled={!username || !password || loading}
                    >
                        {loading && <span className='loader mr-2'></span>}
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;