import React from 'react';

// The props interface for the SecondInfoRow component
interface SecondInfoRowProps {
    label1: string; // First label text
    label2: string; // Second label text
    value: string; // Main value text
    image?: string; // Optional image URL
    value2: string; // Secondary value text
    value3: string; // Tertiary value text
    icon: React.ElementType; // Icon component
    loading: boolean; // Loading state to show a spinner if data is being fetched
}

// The SecondInfoRow functional component
const SecondInfoRow: React.FC<SecondInfoRowProps> = ({ label1, label2, value, image, value2, value3, icon: Icon, loading }) => (
    <div className='w-[50%] md:w-[70%] lg:w-[40%] grid grid-cols-3 items-start'>
        <div className='flex flex-col gap-2 items-start text-gray'>
            <p className='whitespace-nowrap text-xs lg:text-base'>{label1}</p>
            <p className='whitespace-nowrap text-xs lg:text-base'>{label2}</p>
        </div>
        <div className='relative flex justify-center items-center h-full'>
            <div className='border absolute top-0 z-50 bg-white border-light-gray p-1 rounded-full'>
                <Icon size={20} />
            </div>
            <div className='absolute top-6 left-1/2 transform -translate-x-1/2 w-px h-full bg-gray'></div>
        </div>
        <div className='text-secondary-dark flex flex-col gap-2 pb-4'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p className='font-semibold whitespace-nowrap text-sm lg:text-base'>{value}</p>
                    <p className='whitespace-nowrap font-medium text-xs lg:text-base text-light-gray'>{value2}</p>
                    <div className='flex gap-2 items-center'>
                        {image && <img src={image} alt="avatar" className='w-6 h-10' />}
                        <p className='font-semibold text-sm whitespace-nowrap'>{value3}</p>
                    </div>
                </>
            )}
        </div>
    </div>
);

export default SecondInfoRow;