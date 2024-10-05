import React, { useState } from 'react';
import './City.css'; 

const CityInputForm = () => {
    const [city, setCity] = useState('');
    const [cities, setCities] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setCity(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedCity = city.trim();
        
        
        if (!trimmedCity) {
            setError('City name cannot be empty or whitespace.');
            return;
        }

        if (cities.includes(trimmedCity)) {
            setError('City name already exists in the list.');
            return;
        }

        
        setCities([...cities, trimmedCity]);
        setCity('');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        value={city}
                        onChange={handleInputChange}
                        placeholder="Enter city name"
                    />
                    <button type="submit">Add City</button>
                </div>
            </form>
            {error && <p className="error">{error}</p>}
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>
        </div>
    );
};

export default CityInputForm;
