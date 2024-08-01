import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface RememberMeProps {
    register: UseFormRegister<any>;
}

const RememberMe: React.FC<RememberMeProps> = ({ register }) => (
    <div className='w-full flex items-center'>
        <input
            type='checkbox'
            {...register('rememberMe')}
            className='w-[10%] mt-2'
        />
        <label className='text-secondary-dark font-medium text-base'>Remember me</label>
    </div>
);

export default RememberMe;
