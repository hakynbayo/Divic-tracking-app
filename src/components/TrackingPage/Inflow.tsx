import React from 'react';

const InfoRow = ({ label, value, icon: Icon, loading }: { label: string; value: string; icon: React.ElementType; loading: boolean }) => (
    <div className='w-full flex justify-between items-start gap-6 px-4'>
        <div className='flex gap-2 items-center text-gray w-[40%]'>
            <Icon />
            <p className='text-xs lg:text-base min-w-min'>{label}</p>
        </div>
        <div className='text-secondary-dark w-[70%]'>
            {loading ? <p>Loading...</p> : <p className='w-full lg:w-[45%]'>{value}</p>}
        </div>
    </div>
);

export default InfoRow;
