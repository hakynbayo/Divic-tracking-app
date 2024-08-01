import React from 'react';
import Lost from '../assets/lost.svg'

const LostState = ({ text }: { text: string }) => {
    return (
        <div className='mt-5'>
            <div className='flex min-h-[50vh] w-full flex-col items-center justify-center gap-6 text-center'>
                <div className='text-secondary/50 text-6xl'>
                    <img src={Lost} alt="Empty" />
                </div>
                <h4>404</h4>
                <p className='text-primary-black text-xs'>{text}</p>
            </div>
        </div>
    );
};

export default LostState;
