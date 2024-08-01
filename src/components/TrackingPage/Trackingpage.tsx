import React, { useState } from 'react';
import avatar from '../../assets/Avatar.svg';
import avatar2 from '../../assets/Avatar2.svg';
import NoResultState from '../Empty/NoResultState';
import EmptyState from '../Empty/Emptystate';
import Loader from '../Loader';
import InputForm from './SearchBar';
import ShipmentDetails from './ShipmentDetails';
import Timeline from './Timeline';
import { LuPackagePlus, LuPackageCheck, LuPackageSearch, LuTruck } from 'react-icons/lu';

const Homepage = () => {
    const [query, setQuery] = useState('');
    const [shipmentData, setShipmentData] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const [showData, setShowData] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [noResult, setNoResult] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);

        if (value.length !== 12 || !/^\d+$/.test(value)) {
            setError('Please enter a valid AWB');
        } else {
            setError('');
        }
    };

    const handleTrackClick = () => {
        setLoading(true);
        setTimeout(() => {
            if (query === '210173066689') {
                setShipmentData({
                    trackingNumber: '210173066689',
                    lastUpdated: '16/12/2023 11:33 AM',
                    sender: 'Mohamamd Manaa',
                    consignee: 'Beshy Ezzat',
                    originAddress: 'Ahmed Hassan 25, Nile Street, Zamalek Cairo Egypt',
                    destinationAddress: 'Fatima Ali 10, Corniche Road, Gleem Alexandria Egypt',
                    shippingService: 'Express Service',
                    totalCODAmount: '499.55 EGP',
                    timeline: [
                        { time: '12:05PM', date: 'Dec 16, 2023', event: 'Shipment created', description: 'Shipment description', person: 'Abdo Saeed', image: avatar, icon: LuPackagePlus },
                        { time: '14:05PM', date: 'Dec 16, 2023', event: 'Shipment created', description: '', person: 'Abdo Saeed', image: avatar2, icon: LuPackageCheck },
                        { time: '14:08PM', date: 'Dec 16, 2023', event: 'Proof of Pick-up', description: 'Proof of Pick-up description', person: 'Abdo Saeed', image: avatar, icon: LuPackageSearch },
                        { time: '12:05PM', date: 'Dec 16, 2023', event: 'Shipment on delivery', description: 'Description goes here', person: '', image: null, icon: LuTruck },
                    ]
                });
                setShowData(true);
                setNoResult(false); // Clear noResult state if valid data is found
            } else {
                setShipmentData(null);
                setShowData(false);
                setNoResult(true); // Set noResult state if no data is found
            }
            setLoading(false);
        }, 3000);
    };

    return (
        <div className='px-4 md:px-8 lg:px-16 flex flex-col gap-8'>
            <InputForm
                query={query}
                error={error}
                loading={loading}
                onChange={handleInputChange}
                onClick={handleTrackClick}
            />

            {loading ? (
                <Loader />
            ) : showData ? (
                <div className='flex flex-col md:flex-row gap-4'>
                    <ShipmentDetails shipmentData={shipmentData} loading={loading} />
                    <Timeline timeline={shipmentData.timeline} loading={loading} />
                </div>
            ) : noResult ? (
                <NoResultState text="No results found, please try again." />
            ) : (
                <EmptyState text="Enter a valid AWB ID to display details." />
            )}
        </div>
    );
}

export default Homepage;
