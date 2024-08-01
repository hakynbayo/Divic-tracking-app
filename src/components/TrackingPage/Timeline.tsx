import React from 'react';
import SecondInfoRow from './SecondInfoRow';

// The props interface for the Timeline component
interface TimelineProps {
    timeline: TimelineItem[]; // Array of timeline items
    loading: boolean; // Loading state to show a spinner if data is being fetched
}

// The TimelineItem interface
interface TimelineItem {
    time: string; // Time of the event
    date: string; // Date of the event
    event: string; // Event description
    image?: string; // Optional image URL
    description: string; // Detailed description of the event
    person: string; // Person associated with the event
    icon: React.ElementType; // Icon component
}

// The Timeline functional component
const Timeline: React.FC<TimelineProps> = ({ timeline, loading }) => (
    <div>
        <div className='p-4 lg:p-8 flex flex-col gap-2'>
            <h3>Timeline</h3>
        </div>
        <div className='px-4 flex flex-col gap-6'>
            {timeline.map((event, index) => (
                <SecondInfoRow
                    key={index}
                    label1={event.time}
                    label2={event.date}
                    value={event.event}
                    image={event.image}
                    value2={event.description}
                    value3={event.person}
                    icon={event.icon}
                    loading={loading}
                />
            ))}
        </div>
    </div>
);

export default Timeline;