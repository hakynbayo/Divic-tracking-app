import React from 'react';

// The props interface for the InputForm component
interface InputFormProps {
    query: string; // The current query string entered by the user
    error: string; // Error message to display if the input is invalid
    loading: boolean; // Loading state to show a spinner if data is being fetched
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Handler for input change events
    onClick: () => void; // Handler for button click events
}

// InputForm functional component
const InputForm: React.FC<InputFormProps> = ({ query, error, loading, onChange, onClick }) => (
    <div className='w-full bg-light py-12 rounded-lg flex flex-col justify-center items-center'>
        <div className="w-[75%] flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
                type="text"
                value={query}
                onChange={onChange}
                placeholder="Enter AWB ID"
                className={`flex-grow px-2 py-3 placeholder:text-light-gray border ${error ? 'border-red-500' : 'border-secondary'} outline-none rounded-lg`}
            />
            <button
                onClick={onClick}
                className={`text-white px-8 py-3 m-2 flex justify-center items-center ${!query || !!error ? 'bg-light-blue cursor-not-allowed' : 'bg-blue'}`}
                disabled={!query || !!error || loading}
            >
                {loading && <span className='loader mr-2'></span>}
                Track
            </button>
        </div>
        <div className='w-[75%] text-left'>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    </div>
);

export default InputForm;