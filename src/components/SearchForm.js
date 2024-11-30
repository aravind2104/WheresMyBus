import React,{useState} from 'react';

const SearchForm = ({onSearch}) => {
    const [source,setSource] = useState('');
    const [destination,setDestination] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(source,destination);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div>
                <label>Source:</label>
                <input 
                    type="text"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Destination:</label>
                <input 
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
            </div>
            <button type = "submit">Search Buses</button>
        </form>
    );
};

export default SearchForm;