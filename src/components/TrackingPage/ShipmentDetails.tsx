import React from 'react';
import { LuArrowUpRight, LuUser, LuArrowDownToDot, LuMapPin, LuTruck, LuReceipt } from "react-icons/lu";
import InfoRow from './Inflow';
import ShipmentData from '../../interface';

// Define the props interface for the ShipmentDetails component
interface ShipmentDetailsProps {
    shipmentData: ShipmentData; // Shipment data object
    loading: boolean; // Loading state to show a spinner if data is being fetched
}

// Define the ShipmentDetails functional component
const ShipmentDetails: React.FC<ShipmentDetailsProps> = ({ shipmentData, loading }) => (
    <div className='border border-secondary rounded-lg'>
        <div className='p-8 flex flex-col gap-2'>
            <h3>{shipmentData.trackingNumber}</h3>
            <p className='text-sm text-gray'>Last updated {shipmentData.lastUpdated}</p>
        </div>
        <div className='p-8 flex flex-col gap-8'>
            <InfoRow label="Sender" value={shipmentData.sender} icon={LuArrowUpRight} loading={loading} />
            <InfoRow label="Consignee" value={shipmentData.consignee} icon={LuUser} loading={loading} />
            <InfoRow label="Origin Address" value={shipmentData.originAddress} icon={LuArrowDownToDot} loading={loading} />
            <InfoRow label="Destination Address" value={shipmentData.destinationAddress} icon={LuMapPin} loading={loading} />
            <InfoRow label="Shipping Service" value={shipmentData.shippingService} icon={LuTruck} loading={loading} />
        </div>
        <div className='w-full bg-light p-8 flex flex-col items-center'>
            <InfoRow label="Total COD Amount" value={shipmentData.totalCODAmount} icon={LuReceipt} loading={loading} />
        </div>
    </div>
);

export default ShipmentDetails;