import React from 'react';
import { LuArrowUpRight, LuUser, LuArrowDownToDot, LuMapPin, LuTruck, LuReceipt, LuPackagePlus, LuPackageCheck, LuPackageSearch } from "react-icons/lu";
import avatar from '../assets/Avatar.svg';
import avatar2 from '../assets/Avatar2.svg';

const InfoRow = ({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) => (
    <div className='w-full flex justify-between items-start px-4'>
        <div className='flex gap-2 items-center text-gray w-[40%]'>
            <Icon />
            <p>{label}</p>
        </div>
        <div className='text-secondary-dark w-[60%]'>
            <p className='w-[45%]'>{value}</p>
        </div>
    </div>
);

interface SecondInfoRowProps {
    label1: string;
    label2: string;
    value: string;
    image?: any;
    value2: string;
    value3: string;
    icon: React.ElementType;
}

const SecondInfoRow: React.FC<SecondInfoRowProps> = ({ label1, label2, value, image, value2, value3, icon: Icon }) => (
    <div className='w-[60%] grid grid-cols-3 gap-6 px-4 items-start'>
        <div className='flex flex-col gap-2 items-start text-gray'>
            <p>{label1}</p>
            <p>{label2}</p>
        </div>

        <div className='relative flex justify-center items-center h-full'>
            <div className='border border-light-gray p-1 rounded-full'>
                <Icon size={20} />
            </div>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gray'></div>
        </div>

        <div className='text-secondary-dark flex flex-col text-base gap-2 pb-8'>
            <p className='font-semibold whitespace-nowrap'>{value}</p>
            <p className='whitespace-nowrap font-medium text-light-gray'>{value2}</p>
            <div className='flex gap-2 items-center'>
                {image && <img src={image} alt="avatar" className='w-6 h-10' />}
                <p className='font-semibold text-sm whitespace-nowrap'>{value3}</p>
            </div>
        </div>
    </div>
);

const Homepage = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='border border-secondary rounded-lg'>
                <div className='p-8 flex flex-col gap-2'>
                    <h3>4515645646466</h3>
                    <p className='text-sm text-gray'>Last updated 16/12/2023 11:33 AM</p>
                </div>

                <div className='p-8 flex flex-col gap-8'>
                    <InfoRow label="Sender" value="Mohamamd Manaa" icon={LuArrowUpRight} />
                    <InfoRow label="Consignee" value="Beshouy Ezzat" icon={LuUser} />
                    <InfoRow label="Origin Address" value="Ahmed Hassan 25, Nile Street, Zamalek Cairo Egypt" icon={LuArrowDownToDot} />
                    <InfoRow label="Destination Address" value="Fatima Ali 10, Corniche Road, Gleem Alexandria Egypt" icon={LuMapPin} />
                    <InfoRow label="Shipping Service" value="Express Service" icon={LuTruck} />
                </div>
                <div className='w-full bg-light p-8 flex flex-col items-center'>
                    <InfoRow label="Total COD Amount" value="499.55 EGP" icon={LuReceipt} />
                </div>
            </div>

            <div className=''>
                <div className='p-8 flex flex-col gap-2'>
                    <h3>Timeline</h3>
                </div>

                <div className='px-4 flex flex-col gap-6'>
                    <SecondInfoRow label1="12:05PM" label2="Dec 16, 2023" value="Shipment created" image={avatar} value2="Shipment description" value3="Abdo Saeed" icon={LuPackagePlus} />
                    <SecondInfoRow label1="14:05PM" label2="Dec 16, 2023" value="Shipment created" image={avatar2} value2="" value3="Abdo Saeed" icon={LuPackageCheck} />
                    <SecondInfoRow label1="14:08PM" label2="Dec 16, 2023" value="Proof of Pick-up" image={avatar} value2="Proof of Pick-up description" value3="Abdo Saeed" icon={LuPackageSearch} />
                    <SecondInfoRow label1="12:05PM" label2="Dec 16, 2023" value="Shipment on delivery" value2="Description goes here " value3="" icon={LuTruck} />
                </div>
            </div>
        </div>
    );
}

export default Homepage;