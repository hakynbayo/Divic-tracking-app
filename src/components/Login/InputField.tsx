import React from 'react';
import { LuUsers } from 'react-icons/lu';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<any>;
    error?: FieldError;
    icon: React.ElementType;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, placeholder, register, error, icon: Icon }) => (
    <label className='w-full'>
        <p className='font-semibold text-secondary-dark'>{label}</p>
        <div className='relative flex items-center'>
            <Icon className='absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400' />
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, {
                    required: `${label} is required`,
                    pattern: type === 'email' ? {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enter a valid email address',
                    } : undefined,
                })}
                className={`border outline-light-blue rounded-lg border-secondary p-4 pl-10 mt-2 w-full ${error ? 'border-red-500' : 'border-secondary'}`}
            />
        </div>
        {error && <span className='text-red-500 text-left'>{error.message}</span>}
    </label>
);

export default InputField;
