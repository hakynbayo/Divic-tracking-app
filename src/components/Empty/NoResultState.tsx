import React from 'react';
import NoResult from '../../assets/NoResult.svg'

const NoResultState = ({ text }: { text: string }) => {
    return (
        <div className='mt-5'>
            <div className='flex min-h-[50vh] w-full flex-col items-center justify-center gap-6 text-center'>
                <div className='text-secondary/50 text-6xl'>
                    <img src={NoResult} alt="Empty" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h4>No result</h4>
                    <p className='text-primary-black text-xs'>{text}</p>
                </div>
                <div className='text-blue'>
                    <a href='#'>Retry</a>
                </div>
            </div>
        </div>
    );
};

export default NoResultState;
