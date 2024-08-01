import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className="w-[75%] flex flex-col sm:flex-row items-center justify-center gap-4 ">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Enter AWB ID"
                className="flex-grow px-2 py-3 placeholder:text-light-gray border border-secondary outline-none rounded-lg"
            />
            <button
                className={`text-white px-8 py-3 m-2 flex justify-center items-center ${!query ? 'bg-light-blue cursor-not-allowed' : 'bg-blue'}`}
                disabled={!query}
            >
                Track
            </button>

        </div>
    );
};

export default SearchBar;