import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import CountryModal from '../components/CountryModal';

const Dashboard = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      const sortedCountries = response.data.sort((a, b) => 
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedCountries);
      setFilteredCountries(sortedCountries);
    })
    .catch(error => console.error('Error fetching countries:', error));
}, []);


  const handleSearch = (e) => {
    e.preventDefault();
    const searchResults = countries.filter(country => 
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(searchResults);
  };

  const handleCardClick = (country) => {
    setSelectedCountry(country);
  };

  const handleCloseModal = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="dashboard">
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search for a country..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>
      <div className="country-grid">
        {filteredCountries.map(country => (
          <CountryCard 
            key={country.cca3} 
            country={country} 
            onClick={handleCardClick} 
          />
        ))}
      </div>
      <CountryModal country={selectedCountry} onClose={handleCloseModal} />
    </div>
  );
};

export default Dashboard;
