import React from 'react';

const CountryCard = ({ country, onClick }) => {
  return (
    <div className="country-card" onClick={() => onClick(country)}>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <h2>{country.name.common}</h2>
      <p>{country.capital}</p>
    </div>
  );
};

export default CountryCard;