import React from 'react';

const CountryModal = ({ country, onClose }) => {
  if (!country) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Language: {Object.values(country.languages).join(', ')}</p>
      </div>
    </div>
  );
};

export default CountryModal;
