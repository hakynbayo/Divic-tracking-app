import React, { useState } from 'react';
import { LuLock, LuEyeOff, LuEye } from 'react-icons/lu';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface PasswordFieldProps {
    label: string;
    name: string;
    placeholder: string;
    register: UseFormRegister<any>;
    error?: FieldError;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ label, name, placeholder, register, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-full'>
            <label>
                <div className='w-full flex justify-between items-center'>
                    <p className='font-semibold text-secondary-dark'>{label}</p>
                    <a href='#' className='text-blue m-2 font-semibold'>Forgot Password?</a>
                </div>
                <div className='relative flex items-center'>
                    <LuLock className='absolute left-3 top-[60%] transform -translate-y-1/2 text-gray' />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder={placeholder}
                        {...register(name, {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long',
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: 'Password must contain a number, a special character, and at least 8 characters',
                            },
                        })}
                        className={`border outline-light-blue rounded-lg border-secondary p-4 pl-10 mt-2 w-full ${error ? 'border-red-500' : 'border-secondary'}`}
                    />
                    <div
                        className='absolute right-3 top-[60%] transform -translate-y-1/2 cursor-pointer'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <LuEyeOff className='text-gray-400' /> : <LuEye className='text-gray-400' />}
                    </div>
                </div>
                {error && <span className='text-red-500 text-sm text-left'>{error.message}</span>}
            </label>
        </div>
    );
};

export default PasswordField;
