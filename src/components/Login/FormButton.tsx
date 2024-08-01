import React from 'react';

interface SignInButtonProps {
    loading: boolean;
    disabled: boolean;
    username: string;
    password: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({ loading, disabled, username, password }) => (
    <button
        type='submit'
        className={`w-full text-white p-2 m-2 flex justify-center items-center ${!username || !password ? 'bg-light-blue cursor-not-allowed' : 'bg-blue'}`}
        disabled={disabled}
    >
        {loading && <span className='loader mr-2'></span>}
        Sign in
    </button>
);

export default SignInButton;
